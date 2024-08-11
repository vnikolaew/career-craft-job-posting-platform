import { HTTPDataSource } from "apollo-datasource-http";
import { Pool } from "undici";
import { KeyValueCache } from "@apollo/utils.keyvaluecache";

export interface MovieResponse {
   Search: Movie[];
   totalResults: string;
   Response: string;
}

export interface Movie {
   Title: string;
   Year: string;
   imdbID: string;
   Type: string;
   Poster: string;
}

export class MoviesAPI extends HTTPDataSource<string> {

   override baseURL = `http://www.omdbapi.com`;
   static BASE_URL = `http://www.omdbapi.com`;

   private apiKey = `8264c8be`;

   constructor(opts: { cache: KeyValueCache, token?: string }) {
      super(MoviesAPI.BASE_URL, { pool: new Pool(MoviesAPI.BASE_URL) });

      this.initialize({ cache: opts.cache, context: opts.token ?? `` });
   }

   protected override isResponseCacheable<TResult = unknown>(request, response) {
      return true;
   }

   protected override isRequestCacheable(request) {
      return true;
   }

   async searchMovies(search: string, page: number = 1) {
      const movies = await this.get<MovieResponse>(`/`, {
         query: {
            s: encodeURIComponent(search),
            apiKey: this.apiKey,
            page,
         },
      });

      return this.isResponseOk(movies.statusCode) ? movies.body : null;
   }
}