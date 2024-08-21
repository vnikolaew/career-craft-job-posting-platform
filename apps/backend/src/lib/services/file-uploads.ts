import * as fs from "fs";
import * as path from "path";
import * as process from "process";
import { File } from "undici";
import { Request, Response } from "express";
import mime from "mime-types";

interface IFileUploadService {
   upload: (file: File) => Promise<boolean>;
}

export class LocalFileSystemUploadService implements IFileUploadService {
   private static readonly uploadsDir: string = `uploads`;

   async upload(file: File): Promise<boolean> {
      let name = file.name;

      try {
         fs.writeFileSync(
            path.join(process.cwd(), LocalFileSystemUploadService.uploadsDir, name.trim()),
            new DataView(await file.arrayBuffer()));

         return true;
      } catch (err) {
         console.error({ err });
         return false;
      }
   }
}

export const fileUploadHandler = async (req: Request, res: Response) => {
   // Was a file submitted?
   if (!req.files || !req.files.file) {
      return res.status(422).send("No files were uploaded");
   }

   const uploadedFile = req.files.file;
   let extension = mime.extension(uploadedFile.mimetype);

   console.log({ extension, uploadedFile });
   let file = new File(uploadedFile.data, uploadedFile.name, {
      type:  uploadedFile.mimetype,
   });

   let localFileUploadService = new LocalFileSystemUploadService();
   let success = await localFileUploadService.upload(file)

   return res.json({ ok: success });
};