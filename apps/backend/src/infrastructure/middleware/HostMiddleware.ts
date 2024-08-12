import express from "express";
import { __IS_HTTPS__ } from "@consts";

export const WHITELISTED_DOMAINS = new Set<string>(
   (process.env.HOST?.split(`;`) ?? [`localhost`, `127.0.0.1`, `apollo-next.com`, `api.apollo-next.com`]));

export const WHITELISTED_URLS = (port: number) => [...WHITELISTED_DOMAINS].map(domain => `http${__IS_HTTPS__ ? `s` : ``}://${domain}:${port}`)

export function hostMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
   let host = req.hostname;

   if (!WHITELISTED_DOMAINS.has(host)) {
      res.status(400).json({ error: `Invalid hostname: ${host}` });
      return;
   }

   next();
}