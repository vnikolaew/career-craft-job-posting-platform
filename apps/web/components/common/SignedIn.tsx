"use client";
import React, { Fragment, PropsWithChildren } from "react";
import { useMeId } from "@/hooks/useMeId";

export interface SignedInProps extends PropsWithChildren {
}

const SignedIn = ({ children }: SignedInProps) => {
   const meId = useMeId();

   return meId?.length ? children : <Fragment />;

};

export default SignedIn;