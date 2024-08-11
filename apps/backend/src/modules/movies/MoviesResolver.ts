import { Arg, Ctx, Field, Int, ObjectType, Query, Resolver } from "type-graphql";
import { MyContext } from "@types";


@ObjectType()
export class Movie {
   @Field(() => String)
   Title: string;

   @Field(() => String)
   Year: string;

   @Field(() => String)
   imdbID: string;

   @Field(() => String)
   Type: string;

   @Field(() => String)
   Poster: string;
}

@Resolver()
export class MoviesResolver {
   @Query(() => [Movie])
   public async searchMovies(@Arg("search", () => String) search: string, @Arg("page", () => Int, { defaultValue: 1 }) page: number, @Ctx() { dataSources: { movies } }: MyContext): Promise<Movie[]> {
      const moviesBody = await movies.searchMovies(search, page);
      return moviesBody ? moviesBody.Search : [];
   }
}