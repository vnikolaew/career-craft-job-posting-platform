import { JobListingRelationsResolver as Base } from "@generated/resolvers/relations";
import { JobListing } from "@generated/models/JobListing";
import { Company } from "@generated/models/Company";

import { Arg, Authorized, Ctx, Directive, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { MyContext } from "@types";
import {
   GetJobListingLevelsDetailsResponse, GetKeywordsDetailsResponse,
   GetRelevantCompaniesInput,
   JobListingParameters,
   SearchJobListingsInput,
} from "./models";
import { Prisma } from "@prisma/client";
import { NoCache } from "@infrastructure/decorators";
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
import Upload from "graphql-upload/Upload.mjs";
import _ from "lodash";


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

   @Query(of => [JobListing], { nullable: false })
   @NoCache()
   @Authorized()
   public async searchJobListings(
      @Ctx() { prisma }: MyContext,
      @Arg(`input`, of => SearchJobListingsInput) {
         limit,
         skip,
         ...input
      }: SearchJobListingsInput): Promise<JobListing[]> {

      console.log({ input });
      let clauses: Prisma.JobListingWhereInput[] = [];
      if (input?.locations?.length) clauses.push({ location: { in: input.locations } });

      if (input?.categories?.length) clauses.push(this.getCategoriesFilter(input.categories));

      if (input?.from?.length) clauses.push({ parameters: { path: [`from`], equals: input.from.toLowerCase() } });

      if (input?.furlough?.length) clauses.push({
         parameters: {
            path: [`furlough`],
            equals: input.furlough.toLowerCase(),
         },
      });

      if (input?.remoteInterview) clauses.push({ parameters: { path: [`remoteInterview`], equals: true } });
      if (input?.internship) clauses.push({ parameters: { path: [`intern`], equals: true } });
      if (input?.salary) clauses.push(this.getSalaryFilter(input.salary));
      if (input?.languages?.length) clauses.push({ languages: { hasSome: input.languages } });
      if (input?.keywords?.length) clauses.push({ keywords: { hasSome: input.keywords } });
      if (input?.companyIds?.length) clauses.push({ company_id: { in: input.companyIds } });
      if (input?.types?.length) clauses.push({ type: { in: input.types } });
      if (input?.levels?.length) clauses.push({ level: { in: input.levels } });

      return await prisma.jobListing.findMany({
         where: {
            AND: clauses,
         },
         orderBy: { createdAt: `desc` },
      });
   }

   private getCategoriesFilter(categories: string[]): Prisma.JobListingWhereInput {
      return {
         OR: [{
            company: {
               categories: {
                  some: {
                     category: {
                        name: {
                           in: categories,
                           mode: Prisma.QueryMode.insensitive,
                        },
                     },
                  },
               },
            },
         },
            {
               categories: {
                  some: {
                     category: {
                        name: {
                           in: categories,
                           mode: Prisma.QueryMode.insensitive,
                        },
                     },
                  },
               },
            },
         ],
      };
   }

   private getSalaryFilter(filter: string): Prisma.JobListingWhereInput {
      // Try and parse salary range:
      const matches = filter.match(/\d+([,.]?\d+)?/g);
      let [min, max] = [parseFloat(matches[0].replace(/,/g, ``)), parseFloat(matches[1].replace(/,/g, ``))];

      return {
         OR: [
            {
               AND: [
                  {
                     parameters: {
                        path: [`salary`, `type`], equals: `range`,
                     },
                  },
                  {
                     parameters: {
                        path: [`salary`, `min`], lte: min,
                     },
                  },
                  {
                     parameters: {
                        path: [`salary`, `max`], gte: min,
                     },
                  },
               ],
            },
            {
               AND: [
                  {
                     parameters: {
                        path: [`salary`, `type`], equals: `range`,
                     },
                  },
                  {
                     parameters: {
                        path: [`salary`, `min`], lte: max,
                     },
                  },
                  {
                     parameters: {
                        path: [`salary`, `max`], gte: max,
                     },
                  },
               ],
            },
            {
               AND: [
                  {
                     parameters: {
                        path: [`salary`, `type`], equals: `fixed`,
                     },
                  },
                  {
                     parameters: {
                        path: [`salary`, `value`], gte: min, lte: max,
                     },
                  },
               ],
            },
         ],
      };
   }

   @Mutation(of => Boolean, { nullable: false })
   public async fileUpload(@Arg(`file`, of => GraphQLUpload) file: Upload): Promise<boolean> {
      console.log({ file });
      return true;
   }

   @Query(of => [GetJobListingLevelsDetailsResponse], { nullable: false })
   @NoCache()
   public async getJobListingLevelsDetails(@Ctx() { prisma }: MyContext): Promise<GetJobListingLevelsDetailsResponse[]> {
      let jobListings = await prisma.jobListing.findMany({
         select: {
            id: true, name: true, level: true,
         },
      });

      return Object.entries(_.groupBy(jobListings, l => l.level))
         .map(([level, listings]) => ({ name: level, totalJobsCount: listings.length }));
   }


   @Query(of => [GetKeywordsDetailsResponse], { nullable: false })
   @NoCache()
   public async getAllKeywords(@Ctx() { prisma }: MyContext): Promise<GetKeywordsDetailsResponse[]> {
      let listings = await prisma.jobListing.findMany({
         select: { id: true, keywords: true },
      });

      let keywordListingsCount = new Map<string, number>();

      for (let listing of listings) {
         for (let keyword of listing.keywords) {
            keywordListingsCount.set(keyword, (keywordListingsCount.get(keyword) || 0) + 1);
         }
      }

      return [...keywordListingsCount.entries()].map(([keyword, count]) => ({ name: keyword, totalJobsCount: count }));
   }

   @Query(of => [Company], { nullable: false })
   @Authorized()
   @NoCache()
   public async getMostRelevantCompanies(
      @Arg(`input`, of => GetRelevantCompaniesInput)
         { categories, skip, limit }: GetRelevantCompaniesInput,
      @Ctx() { prisma }: MyContext): Promise<Company[]> {

      let filter = !!categories?.length ? Prisma.sql`
      WHERE EXISTS (SELECT 1
                    FROM unnest(q.categories) AS cat
                    WHERE LOWER(cat) = ANY (ARRAY [${Prisma.join(categories)}]::text[]))
         OR EXISTS (SELECT 1
                    FROM unnest(q.job_categories) AS job_cat
                    WHERE LOWER(job_cat) = ANY (ARRAY [${Prisma.join(categories)}]::text[]))
      ` : Prisma.empty;

      let companies = await prisma.$queryRaw<(Company & { categories: string[]; listings_count: number })[]>`
          SELECT *
          FROM (SELECT *
                FROM (SELECT c.*,
                             ARRAY(SELECT DISTINCT * FROM UNNEST(array_agg(cc.name)))  as categories,
                             ARRAY(SELECT DISTINCT * FROM UNNEST(array_agg(jlc.name))) as job_categories,
                             COUNT(jl)                                                 as listings_count
                      FROM "Company" c
                               LEFT JOIN public."CategoryOnCompany" COC on c.id = COC.company_id
                               LEFT JOIN "CompanyCategory" cc ON cc.id = COC.category_id
                               LEFT JOIN "JobListing" jl ON jl.company_id = c.id
                               LEFT JOIN public."CategoryOnJobListing" COJL on jl.id = COJL.listing_id
                               LEFT JOIN "JobListingCategory" jlc ON COJL.category_id = jlc.id
                      GROUP BY c.id, c.name) q ${filter}
                ORDER BY listings_count DESC) o
              LIMIT ${limit}
          OFFSET ${skip};
      `;

      return companies.map(c => ({
         ...c,
         _count: { listings: Number(c.listings_count) ?? 0, categories: c.categories?.length ?? 0 },
      }));
   }
}
