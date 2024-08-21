import { JobListingRelationsResolver as Base } from "@generated/resolvers/relations";
import { JobListing } from "@generated/models/JobListing";
import { Company } from "@generated/models/Company";

import { Arg, Authorized, Ctx, Directive, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { MyContext } from "@types";
import { GetRelevantCompaniesInput, JobListingParameters } from "./models";
import { Prisma } from "@prisma/client";
import { NoCache } from "@infrastructure/decorators";
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
import Upload from "graphql-upload/Upload.mjs";

@Resolver(of => JobListing)
export class JobListingCrudResolver extends Base {
   @FieldResolver(of => Boolean, { nullable: true })
   @Authorized()
   @Directive("@client")
   public async isSaved(@Root() jobListing: JobListing, @Ctx() { prisma, userId }: MyContext): Promise<boolean> {
      return false;

      let savedListings = await prisma.savedListing.findMany({
         where: { userId },
         select: { id: true, listing_id: true },
      });

      return savedListings?.some(l => l?.listing_id === jobListing.id);
   }

   @FieldResolver(of => JobListingParameters, { nullable: true })
   public async parametersTyped(@Root() { parameters }: JobListing): Promise<JobListingParameters | null> {
      return parameters as unknown as JobListingParameters;
   }

   @Mutation(of => Boolean, { nullable: false })
   public async fileUpload(@Arg(`file`, of => GraphQLUpload) file: Upload): Promise<boolean> {
      console.log({ file });
      return true;
   }

   @Query(of => [Company], { nullable: false })
   @Authorized()
   @NoCache()
   public async getMostRelevantCompanies(
      @Arg(`input`, of => GetRelevantCompaniesInput)
         { category, skip, limit }: GetRelevantCompaniesInput,
      @Ctx() { prisma }: MyContext): Promise<Company[]> {
      let filter = !!category.length ? Prisma.sql`WHERE ${category} = ANY (SELECT LOWER(unnest(q.categories)))` : Prisma.empty;

      let companies = await prisma.$queryRaw<(Company & { categories: string[]; listings_count: number })[]>`
          SELECT * FROM (SELECT *
          FROM (SELECT c.*,
                       ARRAY(SELECT DISTINCT * FROM UNNEST(array_agg(cc.name))) as categories,
                       COUNT(jl)                                                as listings_count
                FROM "Company" c
                         LEFT JOIN public."CategoryOnCompany" COC on c.id = COC.company_id
                         LEFT JOIN "CompanyCategory" cc ON cc.id = COC.category_id
                         LEFT JOIN "JobListing" jl ON jl.company_id = c.id
                GROUP BY c.id, c.name) q ${filter}
          ORDER BY listings_count DESC) o LIMIT ${limit} OFFSET ${skip};
      `;

      return companies.map(c => ({
         ...c,
         _count: { listings: Number(c.listings_count) ?? 0, categories: c.categories?.length ?? 0 },
      }));
   }
}
