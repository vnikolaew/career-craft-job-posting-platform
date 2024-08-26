import React, { PropsWithChildren } from "react";

export interface LayoutProps extends PropsWithChildren {
}

const Layout = ({ children }: LayoutProps) => {
   return (
      <main className={`container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20`}>
         <div className={`max-w-3xl mx-auto`}>
            {children}
         </div>
      </main>
   );
};

export default Layout;