"use client"
import React, { Fragment, PropsWithChildren } from "react";
import { useMeId } from "@/hooks/useMeId";

export interface SignedOutProps extends PropsWithChildren {
}

const SignedOut = ({children}: SignedOutProps) => {
   const meId = useMeId();

   return !meId?.length ? children : <Fragment />;
};

export default SignedOut;