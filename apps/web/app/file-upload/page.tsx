"use client"
import React, { useState } from "react";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";

export interface PageProps {
}

const FILE_UPLOAD_MUTATION = gql(/* GraphQL */`
    mutation FileUpload($file: Upload!) {
        fileUpload(file: $file)
    }
`);

const Page = ({}: PageProps) => {
   const [fileUpload] = useMutation(FILE_UPLOAD_MUTATION);
   const [file, setFile] = useState<File>(null!);

   return (
      <section className={`w-3/4 mx-auto mt-24 flex flex-col gap-8 items-center`}>
         <h2>
            File upload. </h2>
         <input onChange={e => {
            if (e.target.files?.length) {
               setFile(e.target.files[0]!);
            }
         }} type={`file`} />
         <button className={`btn btn-outline`} onClick={async e => {
            e.preventDefault()
            if (file) {
               await fileUpload({ variables: { file } })
            }
         }}>Upload</button>
      </section>
   );
};

export default Page;