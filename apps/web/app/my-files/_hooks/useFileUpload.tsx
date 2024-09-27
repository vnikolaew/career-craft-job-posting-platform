import React, { ChangeEvent, useCallback, useState } from "react";

export function useFileUpload(onUpload?: (file: File) => void | Promise<void>) {
   let fileInputRef = React.createRef<HTMLInputElement>(null!);
   const [file, setFile] = useState<File>(null!);

   const handleChange = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files?.length) {
         let file = e.target.files?.[0];
         console.log({ file });
         setFile(file);

         await onUpload?.(file)
      }
   }, []);

   return { file, fileInputRef, handleChange };
}