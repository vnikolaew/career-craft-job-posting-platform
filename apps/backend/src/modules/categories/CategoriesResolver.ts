import { CompanyCategoryRelationsResolver } from "@generated/resolvers/relations";
import { JobListingCategory } from "@generated/models/JobListingCategory";
import { CompanyCategory } from "@generated/models/CompanyCategory";

import { Arg, Ctx, Field, InputType, Int, ObjectType, Query, Resolver } from "type-graphql";
import { MyContext } from "@types";
import { Max, Min } from "class-validator";
import jsonCategories from "@/data/categories.json";
import crypto from "crypto";
import { NoCache } from "@infrastructure/decorators";

@InputType()
class GetCategoriesDetailsInput {
   @Field(() => Int, { nullable: false, defaultValue: 10 })
   @Min(0)
   @Max(100)
   public limit: number = 10;

   @Field(() => Int, { nullable: false, defaultValue: 0 })
   @Min(0)
   @Max(100)
   public skip: number = 0;
}

@ObjectType()
class CategoryDetailsResponse {
   @Field(() => String, { nullable: false })
   public id: string;

   @Field(() => String, { nullable: false })
   public name: string;

   @Field(() => String, { nullable: false })
   public description: string;

   @Field(() => Int, { nullable: false })
   public totalJobListings: number;
}


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

   @Query(_ => [CategoryDetailsResponse], { nullable: false })
   @NoCache()
   public async getCompanyCategoriesDetails(@Ctx() { prisma }: MyContext, @Arg("input", () => GetCategoriesDetailsInput, {
      nullable: false,
   }) { limit, skip }: GetCategoriesDetailsInput): Promise<CategoryDetailsResponse[]> {
      let categories = await prisma.companyCategory.findMany({
         take: limit,
         skip,
         include: { companies: { include: { company: { include: { listings: true } } } } },
      });

      return categories.map(({ companies, id, name, description }) => ({
         id,
         name,
         description,
         totalJobListings: companies.flatMap(c => c.company?.listings?.length).reduce((a, b) => a + b, 0),
      }));
   }
}