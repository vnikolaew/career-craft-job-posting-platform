"use client";
import React, { PropsWithChildren } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache, from, ApolloLink, HttpLink, split } from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
import { APP_NAME, APP_VERSION } from "@/config/site";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

export interface ApolloProviderProps extends PropsWithChildren {
}

export const DEFAULT_USER_AVATAR_URL = `https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg`;

const wsLink2 = new GraphQLWsLink(
   createClient({
      url: process.env.NEXT_PUBLIC_GRAPHQL_WS_URL!,
   }),
);
// const wsLink = new WebSocketLink(
//    new SubscriptionClient(process.env.NEXT_PUBLIC_GRAPHQL_WS_URL!),
// );

const chain = from([
   new ApolloLink((operation, forward) => {
      console.log(`Apollo Client ~> Requesting operation: ${operation.operationName}`);
      return forward(operation);
   }),
   new RetryLink({ delay: { max: 3000, jitter: true }, attempts: { max: 3 } }),
   new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL!, credentials: `include`, headers: {
         "x-client-name": `${APP_NAME} v1.0`,
         "x-client-version": APP_VERSION,
      },
   }),
]);
const splitLink = split(
   ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === `OperationDefinition` && definition.operation === `subscription`;
   },
   wsLink2, chain,
);

const client = new ApolloClient({
   link: splitLink,
   uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
   cache: new InMemoryCache({
      typePolicies: {
         TypingRun: {
            fields: {
               createdAt: {
                  read(value?: Date | string) {
                     return typeof value === `string` ? new Date(value) : value;
                  },
               },
            },
         },
         User: {
            fields: {
               image: {
                  read(value?: string | null) {
                     return value ?? DEFAULT_USER_AVATAR_URL;
                  },
               },
            },
         },
         IsUserLoggedIn: {
            fields: {
               isLoggedIn: {
                  read(_, { cache }) {
                     return true;
                  },
               },
            },
         },
      },
   }),
});

const ApolloProviderC = ({ children }: ApolloProviderProps) => {
   return (
      <ApolloProvider client={client}>
         {children}
      </ApolloProvider>
   );
};

export default ApolloProviderC;