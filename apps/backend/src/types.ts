import express from "express";
import * as http from "node:http";
import { xprisma } from "@prisma/prisma";
import { MoviesAPI } from "@modules/common/data-sources/MoviesAPI";
import { GraphQLResolveInfo } from "graphql";
import { PubSub } from "graphql-subscriptions";

export type DataSources = `movies`

export interface MyContext {
   prisma: typeof xprisma;
   req: http.IncomingMessage;
   info?: GraphQLResolveInfo,
   pubSub?: PubSub;
   res: express.Response,
   headers?: http.IncomingHttpHeaders;
   complexity?: number
   userId?: string | null
   dataSources?: {
      movies?: MoviesAPI;
   }
   sessionId?: string | null
}

export type Nullable<T> = T | null
