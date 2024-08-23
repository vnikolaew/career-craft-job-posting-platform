"use client";
import React, { PropsWithChildren } from "react";
import { parseAsBoolean, useQueryState } from "nuqs";
import JobFilterButton from "@/app/jobs/_components/filters/JobFilterButton";

export interface BooleanFilterButtonProps extends PropsWithChildren {
   value?: boolean;
   paramName: string;
}

const BooleanFilterButton = ({ value, paramName, children }: BooleanFilterButtonProps) => {
   const [valueBool, setValue] = useQueryState(paramName, parseAsBoolean);

   return (
      <JobFilterButton
         onClick={_ =>
            setValue(x => x === true ? null : !x).then(_ => window.location.reload())}
         modalEnabled={false} active={value === true}>
         {children}
      </JobFilterButton>
   );
};

export default BooleanFilterButton;