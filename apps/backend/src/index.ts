import "reflect-metadata";
import "dotenv/config";

import { UserCrudResolver } from "@generated/resolvers/crud/User/UserCrudResolver";
import * as CrudResolvers from "@generated/resolvers/crud";
import * as RelationsResolvers from "@generated/resolvers/relations";
import { CustomApolloServer } from "@server";
import { BuildSchemaOptions } from "type-graphql";
import { GraphQLJSONObject, resolvers as scalarResolvers } from "graphql-scalars";
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
import { __IS_DEV__ } from "@consts";
import {
   DevOnlyMiddleware,
   LoggingMiddleware,
   ComplexityMiddleware,
   ACExposeHeadersMiddleware,
   AuthMiddleware,
} from "@infrastructure/middleware";
import { MyContext } from "@types";
import {
   JobListingSavesResolver,
   CategoriesResolver,
   EmailsResolver,
   UserResolver,
   CompanyResolver,
   AttachmentsResolver,
   ApplicationsResolver,
   CoverLetterTemplateResolver
} from "@modules";
import { JobListingCrudResolver } from "@modules/job_listings/JobListingResolver";
import { SubscriptionsResolver } from "@modules/subscriptions/SubscriptionsResolver";
import Upload from "graphql-upload/Upload.mjs";
import { CookiesResolver } from "@modules/user/CookiesResolver";

async function main() {
   const PORT = isNaN(Number.parseInt(process.env.PORT ?? ``)) ? 4000 : +process.env.PORT!;

   const schema: BuildSchemaOptions = {
      resolvers: [
         UserResolver, CompanyResolver, CookiesResolver, SubscriptionsResolver, JobListingCrudResolver, JobListingSavesResolver,
         AttachmentsResolver, ApplicationsResolver, CategoriesResolver, EmailsResolver, UserCrudResolver, CoverLetterTemplateResolver,
         ...Object.entries(CrudResolvers)
            .concat(Object.entries(RelationsResolvers) as any[])
            .filter(([key, _]) => key.endsWith(`Resolver`) && !key.includes(`CategoryOn`))
            .map(([_, resolver]) => resolver as Function),

         // ...Object.entries(RelationsResolvers).filter(([key, _]) => key.endsWith(`Resolver`) && !key.includes(`CategoryOn`)).map(([_, resolver]) => resolver as Function),
         // @ts-ignore
         ...Object.entries(scalarResolvers).map(([_, resolver]) => resolver as Function)],
      scalarsMap: [
         { type: Object, scalar: GraphQLJSONObject },
         { type: Upload, scalar: GraphQLUpload },
      ],
      validate: false,
      authChecker: AuthMiddleware.authChecker,
      globalMiddlewares: [...(__IS_DEV__ && process.env.USE_SLEEP === `true` ? [DevOnlyMiddleware] : []), LoggingMiddleware, AuthMiddleware, ComplexityMiddleware, ACExposeHeadersMiddleware],
      emitSchemaFile: true,
   };

   const server = new CustomApolloServer<MyContext>(schema, PORT);
   setInterval(async () => {
      await server.pubSub.publish(`RANDOM_NUMBER`, { number: Math.floor(Math.random() * 100) });
   }, 2_000);

   await server.bootstrapServer();
   await server.start();
}

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = `0`;
main().catch(console.error);
