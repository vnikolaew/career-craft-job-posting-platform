import React, { Fragment } from "react";

export interface ListProps {
   count: number;
   render: (index: number) => JSX.Element;
}

const List = ({ render, count }: ListProps) => {
   return (
      <Fragment>
         {Array.from({ length: count }).map((_, index) => render(index))}
      </Fragment>
   );
};

export default List;