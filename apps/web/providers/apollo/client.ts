import { splitLink } from "@/providers/apollo/links";
import { ApolloClient, InMemoryCache, TypePolicies } from "@apollo/client";
import {
   DEFAULT_COMPANY_BANNER_URL,
   DEFAULT_COMPANY_LOGO_URL,
   DEFAULT_USER_AVATAR_URL,
} from "@/providers/apollo/ApolloProvider";

const typePolicies: TypePolicies = {
   Company: {
      fields: {
         brand_image_url: {
            read(value?: string | null) {
               return value ?? DEFAULT_COMPANY_LOGO_URL;
            },
         },
         banner_image_url: {
            read(value?: string | null) {
               return value ?? DEFAULT_COMPANY_BANNER_URL;
            },
         },
      },
   },
   JobListing: {
      fields: {
         isSaved: {
            read(value?: boolean | null) {
               return false
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
   devtools: { enabled: true },
});