import React, { PropsWithChildren } from "react";

export interface LayoutProps extends PropsWithChildren {
}

const Layout = ({ children }: LayoutProps) => {
   return (
      <section className={`w-3/4 mx-auto mt-32 flex flex-col gap-8 items-center mb-12`}>
         {children}
      </section>
   );
};

export default Layout;