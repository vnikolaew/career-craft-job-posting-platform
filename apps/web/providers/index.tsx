"use client";
import React, { PropsWithChildren } from "react";
import ApolloProvider from "@/providers/apollo/ApolloProvider";
import { ToastsProvider } from "@/components/common/Toast";

export interface IndexProps extends PropsWithChildren {
}

const Providers = ({children}: IndexProps) => {
   return (
      <ApolloProvider>
         <ToastsProvider>
            {children}
         </ToastsProvider>
      </ApolloProvider>
   );
};

export default Providers;