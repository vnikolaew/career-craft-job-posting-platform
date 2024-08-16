import { CompanyRelationsResolver } from "@generated/resolvers/relations";
import { Company } from "@generated/models/Company";
import { JobListing } from "@generated/models/JobListing";
import { Arg, Ctx, Field, FieldResolver, InputType, Int, ObjectType, Query, Resolver, Root } from "type-graphql";
import { MyContext } from "@types";
import { Max, Min } from "class-validator";
import jsonCompanies from "@/data/companies.json";
import jsonJobListings from "@/data/job_listings.json";
import moment from "moment";
import { JsonValue } from "@prisma/client/runtime/library";
import { GraphQLEmailAddress, GraphQLLatitude, GraphQLLongitude, GraphQLURL } from "graphql-scalars";
import { JobListingEmploymentType, JobListingLevel, WorkFromHome } from "@prisma/client";

@InputType()
class GetTopCompaniesInput {

   @Field(() => Int, { nullable: true, defaultValue: 10 })
   @Min(0)
   @Max(100)
   public limit: number = 10;

   @Field(() => Int, { nullable: true, defaultValue: 0 })
   @Min(0)
   @Max(100)
   public skip: number = 0;
}

@ObjectType()
export class Coordinates {
   @Field(() => GraphQLLatitude, { nullable: true })
   latitude: number;

   @Field(() => GraphQLLongitude, { nullable: true })
   longitude: number;
}


@ObjectType()
export class CompanyContact {
   @Field(() => String)
   city: string;

   @Field(() => String)
   address: string;

   @Field(of => Coordinates, { nullable: true })
   coordinates: {
      lat: number;
      lng: number;
   };

   @Field(() => String)
   phone_number?: string;
}

@ObjectType()
export class CompanyWorldwideInfo {
   @Field(() => Date, { nullable: true })
   founded?: Date;

   @Field(() => Int, { nullable: true })
   employeeCount?: number;

   @Field(() => String, { nullable: false })
   headquarters?: string;

   @Field(() => [String], { nullable: false })
   locations: string[];
}


@ObjectType()
export class CompanyLocalInfo {
   @Field(() => Date, { nullable: true })
   since?: Date;

   @Field(() => Int, { nullable: true })
   employeeCount?: number;

   @Field(() => [String], { nullable: false })
   locations: string[];
}


@ObjectType()
export class CompanyContacts {
   @Field(() => String)
   name: string;

   @Field(() => String)
   company_bulstat?: string;

   @Field(() => [CompanyContact], { defaultValue: [] })
   contacts: CompanyContact[] = [];

   @Field(() => GraphQLEmailAddress)
   email?: string;

   @Field(() => String)
   phone_number?: string;

   @Field(() => String)
   address?: string;

   @Field(() => GraphQLURL)
   website_url?: string;

   @Field(() => GraphQLURL)
   facebook_url?: string;

   @Field(() => GraphQLURL)
   twitter_url?: string;

   @Field(() => GraphQLURL)
   linkedin_url?: string;

   @Field(() => GraphQLURL)
   youtube_url?: string;

}

function getRandomItems<T>(array: T[], n: number): T[] {
   // Shuffle the array using Fisher-Yates algorithm
   let shuffledArray = [...array];
   for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
   }

   // Return the first n elements of the shuffled array
   return shuffledArray.slice(0, n);
}

@Resolver(of => Company)
export class CompanyResolver extends CompanyRelationsResolver {

   @FieldResolver(_ => [JobListing], { nullable: true })
   public async listings(@Root() company: Company): Promise<JobListing[]> {
      let listings = company.listings;
      if (!listings?.length) {
         return getRandomItems(jsonJobListings, 5)
            .map(l => ({
               ...l,
               work_from: l.work_from as WorkFromHome,
               level: l.level as JobListingLevel,
               type: l.type as JobListingEmploymentType,
               createdAt: moment(l.createdAt).toDate(),
               updatedAt: moment(l.updatedAt).toDate(),
               companyId: company.id,
               company: { ...company },
            }));

      } else return listings;
   }

   @FieldResolver(_ => Object, { nullable: true })
   public async metadata(@Root() company: Company): Promise<JsonValue> {
      return company.metadata ?? {};
   }

   @FieldResolver(_ => GraphQLEmailAddress, { nullable: false })
   public async email(@Root() company: Company): Promise<string> {
      return company.email;
   }

   @FieldResolver(_ => GraphQLURL, { nullable: true })
   public async brand_image_url(@Root() company: Company): Promise<string> {
      return company.brand_image_url ?? null;
   }

   @FieldResolver(_ => GraphQLURL, { nullable: true })
   public async banner_image_url(@Root() company: Company): Promise<string> {
      return company.banner_image_url ?? null;
   }

   @FieldResolver(_ => CompanyContacts, { nullable: true })
   public async contacts(@Root() company: Company): Promise<CompanyContacts> {
      return company.contacts as unknown as CompanyContacts ?? null;
   }

   @FieldResolver(_ => CompanyLocalInfo, { nullable: true })
   public async local_info(@Root() company: Company): Promise<CompanyLocalInfo> {
      return company.local_info as unknown as CompanyLocalInfo ?? null;
   }

   @FieldResolver(_ => CompanyWorldwideInfo, { nullable: true })
   public async worldwide_info(@Root() company: Company): Promise<CompanyWorldwideInfo> {
      return company.worldwide_info as unknown as CompanyWorldwideInfo ?? null;
   }

   @Query(_ => [Company], { nullable: false })
   public async getTopCompanies(@Ctx() { prisma }: MyContext, @Arg("input", () => GetTopCompaniesInput, {
      nullable: false,
   }) { limit, skip }: GetTopCompaniesInput): Promise<Company[]> {

      let companies = await prisma.company.findMany({
         take: limit,
         skip,
         orderBy: { listings: { _count: `desc` } },
      });

      return companies.length === 0 ? jsonCompanies.map(c => ({
         ...c,
         createdAt: moment(c.createdAt).toDate(),
         updatedAt: moment(c.updatedAt).toDate(),
      })) : companies;
   }
}