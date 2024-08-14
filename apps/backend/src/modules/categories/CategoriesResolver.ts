import { CompanyCategoryRelationsResolver } from "@generated/resolvers/relations";
import { JobListingCategory } from "@generated/models/JobListingCategory";

import { Arg, Ctx, Field, InputType, Int, Query, Resolver } from "type-graphql";
import { MyContext } from "@types";
import { Max, Min } from "class-validator";
import jsonCategories from "@/data/categories.json";
import crypto from "crypto";

@InputType()
class GetTopListingCategoriesInput {
   @Field(() => Int, { nullable: false, defaultValue: 10 })
   @Min(0)
   @Max(100)
   public limit: number = 10;

   @Field(() => Int, { nullable: false, defaultValue: 0 })
   @Min(0)
   @Max(100)
   public skip: number = 0;
}

@Resolver()
export class CategoriesResolver extends CompanyCategoryRelationsResolver {

   @Query(_ => [JobListingCategory], { nullable: false })
   public async getTopListingCategories(@Ctx() { prisma }: MyContext, @Arg("input", () => GetTopListingCategoriesInput, {
      nullable: false,
   }) { limit, skip }: GetTopListingCategoriesInput): Promise<JobListingCategory[]> {

      let categories = await prisma.jobListingCategory.findMany({
         take: limit,
         skip,
         orderBy: { listings: { _count: `desc` } },
      });

      return categories.length === 0
         ? jsonCategories
            .slice(skip, limit)
            .map(c => ({
               id: crypto.randomUUID(),
               ...c,
            })) : categories;
   }
}