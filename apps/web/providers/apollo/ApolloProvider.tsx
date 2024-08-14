"use client";
import React, { PropsWithChildren } from "react";
import {
   ApolloProvider,
   makeVar,
} from "@apollo/client";
import { client } from "@/providers/apollo/client";

export interface ApolloProviderProps extends PropsWithChildren {
}

export const DEFAULT_USER_AVATAR_URL = `https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg`;
export const DEFAULT_COMPANY_LOGO_URL = `/mcdonalds-logo.png`;
export const DEFAULT_COMPANY_BANNER_URL  = `/mcdonalds-banner.avif`;

export const meIdVar = makeVar<string>(null!);

const ApolloProviderC = ({ children }: ApolloProviderProps) => {
   return (
      <ApolloProvider client={client}>
         {children}
      </ApolloProvider>
   );
};

export default ApolloProviderC;