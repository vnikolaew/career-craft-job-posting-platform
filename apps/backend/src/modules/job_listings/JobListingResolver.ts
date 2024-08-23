import { JobListingRelationsResolver as Base } from "@generated/resolvers/relations";
import { JobListing } from "@generated/models/JobListing";
import { Company } from "@generated/models/Company";

import { Arg, Authorized, Ctx, Directive, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { MyContext } from "@types";
import {
   GetEmploymentTypeDetailsResponse,
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
import { JobListingQueryBuilder } from "@modules/job_listings/JobListingQueryBuilder";


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

      let filter = new JobListingQueryBuilder()
         .withLocation(input.locations)
         .withCategories(input.categories)
         .withFrom(input.from)
         .withFurlough(input.furlough)
         .withRemoteInterview(input.remoteInterview)
         .withNoExperience(input.noExperience)
         .withInternship(input.internship)
         .withWorkFromHome(input.workFromHome)
         .withSalary(input.salary)
         .withLanguages(input.languages)
         .withKeywords(input.keywords)
         .withCompanyIds(input.companyIds)
         .withTypes(input.types)
         .withLevels(input.levels)
         .filter;

      return await prisma.jobListing.findMany({
         where: filter,
         orderBy: { createdAt: `desc` },
      });
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

   @Query(of => [GetEmploymentTypeDetailsResponse], { nullable: false })
   @NoCache()
   public async getAllEmploymentTypes(@Ctx() { prisma }: MyContext): Promise<GetEmploymentTypeDetailsResponse[]> {
      let listings = await prisma.jobListing.findMany({
         select: { id: true, type: true },
      });

      let typesListingsCount = new Map<string, number>();

      for (let listing of listings) {
         typesListingsCount.set(listing.type, (typesListingsCount.get(listing.type) || 0) + 1);
      }

      return [...typesListingsCount.entries()]
         .map(([keyword, count]) => ({ name: keyword, totalJobsCount: count }));
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
