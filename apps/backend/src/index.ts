import "reflect-metadata";
import "dotenv/config";

import { UserCrudResolver } from "@generated/resolvers/crud/User/UserCrudResolver";
import * as CrudResolvers from "@generated/resolvers/crud";
import { CustomApolloServer } from "@server";
import { BuildSchemaOptions } from "type-graphql";
import { UserResolver } from "@modules/user/UserResolver";
import { GraphQLJSONObject, resolvers as scalarResolvers } from "graphql-scalars";
import { GraphQLUpload, Upload } from "@infrastructure/scalars/Upload";
import { __IS_DEV__ } from "@consts";
import { DevOnlyMiddleware, LoggingMiddleware, ComplexityMiddleware, ACExposeHeadersMiddleware, AuthMiddleware } from "src/infrastructure/middleware";
import { MyContext } from "@types";
import { MoviesResolver } from "@modules/movies/MoviesResolver";

async function main() {
   const PORT = isNaN(Number.parseInt(process.env.PORT ?? ``)) ? 4000 : +process.env.PORT!;

   const schema: BuildSchemaOptions = {
      resolvers: [UserResolver, MoviesResolver, UserCrudResolver, ...Object.entries(CrudResolvers).filter(([key, _]) => key.endsWith(`Resolver`)).map(([_, resolver]) => resolver as Function),
         // @ts-ignore
         ...Object.entries(scalarResolvers).map(([_, resolver]) => resolver as Function)],
      scalarsMap: [{ type: Object, scalar: GraphQLJSONObject }, {
         type: Upload,
         scalar: GraphQLUpload,
      }],
      validate: true,
      authChecker: AuthMiddleware.authChecker,
      globalMiddlewares: [...(__IS_DEV__ && process.env.USE_SLEEP === `true` ? [DevOnlyMiddleware] : []), LoggingMiddleware, AuthMiddleware, ComplexityMiddleware, ACExposeHeadersMiddleware],
      emitSchemaFile: true,
   }

   const server = new CustomApolloServer<MyContext>(schema, PORT);
   setInterval(async () => {
      await server.pubSub.publish(`RANDOM_NUMBER`, { number: Math.floor(Math.random() * 100) })
   }, 2_000)

   await server.bootstrapServer();
   await server.start()
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = `0`;
main().catch(console.error);
