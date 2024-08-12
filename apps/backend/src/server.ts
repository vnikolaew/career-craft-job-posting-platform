import { buildSchema, BuildSchemaOptions, NonEmptyArray } from "type-graphql";
import {
   ApolloServer,
} from "@apollo/server";
import express from "express";
import { githubLoginRouter } from "@modules/user/auth/github";
import { getPlugins } from "@infrastructure/plugins/CustomPlugin";
import { __IS_DEV__, __IS_HTTPS__ } from "@consts";
import { KeyvAdapter } from "@apollo/utils.keyvadapter";
import Keyv from "keyv";
import { ErrorsAreMissesCache, InMemoryLRUCache } from "@apollo/utils.keyvaluecache";

import * as path from "node:path";
import * as fs from "node:fs";

import { hostMiddleware } from "src/infrastructure/middleware";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import { xprisma } from "@prisma/prisma";
import { MoviesAPI } from "@modules/common/data-sources/MoviesAPI";

import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { PubSub } from "graphql-subscriptions";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { execute, subscribe } from "graphql";
import * as http from "node:http";
import { asyncIteratorToIterable } from "@modules/user/UserResolver";
import { googleLoginRouter } from "@modules/user/auth/google";
import * as https from "node:https";
import { WHITELISTED_URLS } from "@infrastructure/middleware/HostMiddleware";

export class CustomApolloServer<TContext> {
   private readonly schema: Partial<BuildSchemaOptions> & { resolvers: NonEmptyArray<Function> };
   private server?: ApolloServer<TContext>;
   private app?: express.Express;
   private httpServer?: http.Server;
   private wsServer?: WebSocketServer;
   public readonly pubSub: PubSub;

   constructor(schema: BuildSchemaOptions, private readonly port = 4000) {
      this.schema = schema;
      this.pubSub = new PubSub();
   }

   private get cache() {
      return !!process.env.REDIS_URL?.length
         ? new ErrorsAreMissesCache(new KeyvAdapter(new Keyv(process.env.REDIS_URL!)))
         : new InMemoryLRUCache({ ttl: 1000 * 60 * 5, maxSize: 1_000 });
   }

   public async bootstrapServer() {
      console.log(`🚀 Running in ${__IS_DEV__ ? `development` : `production`} mode ...`);

      this.app = express();
      this.app
         .use(`/login/github`, githubLoginRouter)
         .use(`/login/google`, googleLoginRouter);

      this.httpServer = __IS_HTTPS__ ? https.createServer(
         {
            key: fs.readFileSync(path.join(process.cwd(), `certs`, `api.apollo-next.com.key`)),
            cert: fs.readFileSync(path.join(process.cwd(), `certs`, `api.apollo-next.com.crt`)),
         },
         this.app) : http.createServer(this.app);


      const schema = await buildSchema({
         ...this.schema, pubSub: {
            subscribe(routingKey: string, dynamicId?: unknown): AsyncIterable<unknown> {
               return asyncIteratorToIterable(this.pubSub.asyncIterator(routingKey));
            },
            publish(routingKey: string, ...args) {
               return this.pubSub.publish(routingKey, ...args);
            },
         },
      });
      this.copySchemaFile();

      this.wsServer = new WebSocketServer({
         server: this.httpServer,
         path: "/graphql",
      });

      const sServer = SubscriptionServer.create({
         schema, execute, subscribe,
         onConnect: async (connectionParams) => {
            console.log({ connectionParams });
         },
         onOperation: async (message) => {
            console.log({ message });
         },
      }, { server: this.httpServer, path: `/graphql` });

      const serverCleanup = useServer({ schema }, this.wsServer);

      this.server = new ApolloServer<TContext>({
         introspection: true,
         cache: this.cache,
         schema,
         csrfPrevention: true,
         plugins: [...getPlugins(this.httpServer), {
            async serverWillStart() {
               return {
                  async drainServer() {
                     await serverCleanup.dispose();
                  },
               };
            },
         }],
      });

      return this.server;
   }

   public async start() {
      if (!this.server) throw new Error(`Apollo server not initialized!`);

      const PORT = this.port ?? (isNaN(Number.parseInt(process.env.PORT ?? ``)) ? 4000 : +process.env.PORT!);
      await this.server?.start();

      this.app.use(`/`,
         hostMiddleware,
         // graphqlUploadExpress(),
         cors<cors.CorsRequest>({
            origin: [`http://apollo-next.com:3000`, `http://localhost:3000`, `https://apollo-next.com:3000`],
            credentials: true,
         }),
         express.json(),
         expressMiddleware(this.server, {
            context: async ({ req, res }) => ({
               prisma: xprisma,
               headers: req.headers,
               res,
               pubSub: this.pubSub,
               userId: undefined,
               req,
               dataSources: {
                  movies: new MoviesAPI({ cache: this.server.cache }),
               },
            }) as TContext,
         }));

      await new Promise<void>(res => this.httpServer.listen({ port: PORT }, res));
      console.log(`🚀 Server ready and listening on port ${PORT} at: ${WHITELISTED_URLS(PORT).join(`; `)}`);
   }

   private copySchemaFile() {
      const from = path.join(process.cwd(), `schema.graphql`);
      const to = path.join(process.cwd(), `..`, `web`, `schema.graphql`);

      if (fs.existsSync(from) && fs.existsSync(path.dirname(to))) {
         fs.copyFileSync(from, to);
      }
   }
}