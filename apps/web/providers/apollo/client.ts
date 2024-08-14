import { ApolloClient, InMemoryCache, TypePolicies } from "@apollo/client";
import { splitLink } from "@/providers/apollo/links";
import { DEFAULT_USER_AVATAR_URL } from "@/providers/apollo/ApolloProvider";

const typePolicies: TypePolicies = {
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
            read() {
               return true;
            },
         },
      },
   },
};

export const client = new ApolloClient({
   link: splitLink,
   uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
   cache: new InMemoryCache({ typePolicies }),
});
