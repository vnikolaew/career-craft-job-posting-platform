import { splitLink } from "@/providers/apollo/links";
import {
   ApolloClient, ApolloClientOptions, ApolloQueryResult,
   InMemoryCache,
   NormalizedCacheObject,
   OperationVariables,
   QueryOptions,
   TypePolicies,
} from "@apollo/client";
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
               return false;
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

export class CustomApolloClient extends ApolloClient<NormalizedCacheObject> {
   constructor(options: ApolloClientOptions<any>) {
      super(options);
   }

   authenticatedQuery<T = any, TVariables extends OperationVariables = OperationVariables>(cookie: string, options: QueryOptions<TVariables, T>): Promise<ApolloQueryResult<T>> {
      let context = { headers: { Cookie: cookie } };
      return super.query({ context, ...options });
   }
}

export const client = new CustomApolloClient({
   link: splitLink,
   uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
   cache: new InMemoryCache({ typePolicies }),
   devtools: { enabled: true },
});
