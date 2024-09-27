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
   public static readonly uploadsDir: string = `uploads`;

   async upload(data: Buffer, file_name: string): Promise<boolean> {
      try {
         fs.writeFileSync(path.join(process.cwd(), LocalFileSystemUploadService.uploadsDir, file_name.trim()), data);

         return true;
      } catch (err) {
         console.error({ err });
         return false;
      }
   }
}

export const fileUploadHandler = async (req: Request, res: Response) => {
   // Was a file submitted?
   if (!req.files || !req.files.file) return res.status(422).send("No files were uploaded");

   const uploadedFile = req.files.file;

   let localFileUploadService = new LocalFileSystemUploadService();
   let success = await localFileUploadService.upload(uploadedFile.data, uploadedFile.name);

   return success ?
      res.json({ ok: success, path: `/${LocalFileSystemUploadService.uploadsDir}/${uploadedFile.name}` })
      : res.json({ ok: success, path: null });
};