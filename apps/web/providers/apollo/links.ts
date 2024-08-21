import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { ApolloLink, from, HttpLink, split } from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
import { APP_NAME, APP_VERSION } from "@/config/site";
import { getMainDefinition } from "@apollo/client/utilities";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const wsLink2 = new GraphQLWsLink(
   createClient({
      url: process.env.NEXT_PUBLIC_GRAPHQL_WS_URL!,
   }),
);

const logLink = new ApolloLink((operation, forward) => {
   console.log(`Apollo Client ~> Requesting operation: ${operation.operationName}`);
   return forward(operation);
});

const sleepLink = new ApolloLink(async (operation, forward) => {
   await new Promise((resolve) => setTimeout(resolve, 500));
   return forward(operation);
});

const chain = from([
   logLink,
   sleepLink,
   new RetryLink({ delay: { max: 3000, jitter: true }, attempts: { max: 3 } }),
   new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL!,
      credentials: `include`,
      headers: {
         "x-client-name": `${APP_NAME} v1.0`,
         "x-client-version": APP_VERSION,
      },
   }),
   createUploadLink({ credentials: `include` }),
]);

export const splitLink = split(
   ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === `OperationDefinition` && definition.operation === `subscription`;
   },
   wsLink2, chain,
);
