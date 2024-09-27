import { CompanyRelationsResolver } from "@generated/resolvers/relations";
import { Company } from "@generated/models/Company";
import { CompanyCount } from "@generated/resolvers/outputs/CompanyCount";
import { CompanyCategory } from "@generated/models/CompanyCategory";
import { JobListing } from "@generated/models/JobListing";

import {
   Arg,
   Ctx,
   Field,
   FieldResolver,
   InputType,
   Int, Mutation,
   ObjectType,
   Query,
   Resolver,
   Root,
} from "type-graphql";
import { MyContext } from "@types";
import { Max, Min } from "class-validator";
import jsonCompanies from "@/data/companies.json";
import jsonJobListings from "@/data/job_listings.json";

import moment from "moment";
import { JsonValue } from "@prisma/client/runtime/library";
import { GraphQLEmailAddress, GraphQLLatitude, GraphQLLongitude, GraphQLURL } from "graphql-scalars";
import { JobListingEmploymentType, JobListingLevel, WorkFromHome } from "@prisma/client";
import { NoCache } from "@infrastructure/decorators";
import { fetch } from "undici";
import { EmailService } from "@modules/user/services/EmailService";
import { CompanySignUpVerificationEmail } from "@repo/emails";
import { APP_NAME } from "@consts";

@InputType()
class GetTopCompaniesInput {

   @Field(() => Int, { nullable: true, defaultValue: 10 }) @Min(0)
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

@InputType()
export class CompanySignUpInput {
   @Field(() => String, { nullable: false })
   companyName: string;

   @Field(() => String, { nullable: false })
   companyAddressRegistration: string;

   @Field(() => String, { nullable: false })
   organizationType: "company" | "agency";

   @Field(() => [String], { nullable: false })
   businessSectors: string[];

   @Field(() => String, { nullable: false })
   companySite: string;

   @Field(() => String, { nullable: false })
   companyPhone: string;

   @Field(() => String, { nullable: false })
   companyAddress: string;

   @Field(() => String, { nullable: false })
   administratorFirstName: string;

   @Field(() => String, { nullable: false })
   administratorLastName: string;

   @Field(() => String, { nullable: false })
   administratorEmail: string;

   @Field(() => String, { nullable: false })
   administratorPosition: string;

   @Field(() => String, { nullable: false })
   administratorPhone: string;

   @Field(() => String, { nullable: false })
   companyUsername: string;
   @Field(() => String, { nullable: false })
   companyPassword: string;
   @Field(() => String, { nullable: false })
   companyPasswordConfirm: string;

   @Field(() => Boolean, { nullable: false })
   authorizedPerson: boolean;

   @Field(() => String, { nullable: true })
   officialName?: string;

   @Field(() => String, { nullable: true })
   officialEmail?: string;

   @Field(() => String, { nullable: true })
   officialPhone?: string;

   @Field(() => String, { nullable: true })
   officialCorrespondenceAddress?: string;

   @Field(() => String, { nullable: false })
   key: string;
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
   private readonly emailService: EmailService;

   constructor() {
      super();
      this.emailService = new EmailService();
   }

   @FieldResolver(_ => Int, { nullable: false })
   public async listingsCount(@Root() company: Company, @Ctx() { prisma }: MyContext): Promise<number> {
      let count = company._count?.listings ?? company.listings?.length;
      if (count === null || count === undefined) {
         return await prisma.jobListing.count({ where: { company_id: company.id } });
      }
   }

   @FieldResolver(_ => CompanyCount, { nullable: false })
   @NoCache()
   public async _count(@Root() { id, _count }: Company, @Ctx() { prisma }: MyContext): Promise<Partial<CompanyCount>> {
      if (!!_count) return _count;

      const { _count: count } = await prisma.company.findUnique({
         where: { id },
         select: { _count: { select: { listings: true, categories: true } } },
      });

      return { ...count, listings: count?.listings === 0 ? 5 : 0 };
   }

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
               createdAt: moment(l.createdAt)?.isValid() ? moment(l.createdAt).toDate() : moment().subtract(1, `m`).toDate(),
               updatedAt: moment(l.updatedAt)?.isValid() ? moment(l.updatedAt).toDate() : moment().subtract(1, `m`).toDate(),
               company_id: company.id,
               company: { ...company },
            }));

      } else return listings;
   }

   @FieldResolver(_ => [CompanyCategory], { nullable: true })
   public async companyCategories(@Root() company: Company, @Ctx() { prisma }: MyContext): Promise<CompanyCategory[]> {
      let fetched = company?.categories?.map(c => c?.category) ?? [];
      if (!!fetched?.length && fetched?.every(Boolean)) return fetched;

      let companyCategories = await prisma.company.findFirst({
         where: { id: company.id },
         select: {
            categories: {
               select: {
                  category_id: true,
               },
            },
         },
      });
      const categories = await prisma.companyCategory.findMany({
         where: {
            id: {
               in: companyCategories.categories.map(c => c.category_id),
            },
         },
      });
      return categories;
   }

   @FieldResolver(_ => Object, { nullable: true })
   public async metadata(@Root() company: Company): Promise<JsonValue> {
      return company.metadata ?? {};
   }

   @FieldResolver(_ => GraphQLEmailAddress, { nullable: false })
   public async email(@Root() company: Company): Promise<string> {
      return company.email?.length ? company.email : `placeholder@placeholder.com`;
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

   @Query(_ => [String], { nullable: false })
   public async getAvailableCountries(@Ctx() { userId }: MyContext): Promise<string[]> {
      let response = await fetch(`https://restcountries.com/v3.1/all?fields=name`, {
         credentials: `include`,
         mode: `cors`,
      });

      if (!response.ok) return [];

      let countries = (await response.json() as any[]).map(x => x?.name?.common);
      return countries;
   }

   @Mutation(_ => Company, { nullable: true })
   public async companySignUp(
      @Ctx() { prisma, req }: MyContext,
      @Arg("input", () => CompanySignUpInput, { nullable: false }) input: CompanySignUpInput): Promise<Company | null> {
      try {
         let company = await prisma.company.create({
            data: {
               name: input.companyName,
               about_raw: ``,
               career_description_raw: ``,
               email: ``,
               local_info: {},
               worldwide_info: {},
               contacts: {},
               metadata: {},
            },
         });

         let email = company.email;
         let r = req.headers.referer;

         console.log({ referer: r });

         return company;

         let response = await this.emailService.sendMail({
            to: input.administratorEmail,
            subject: `Company Sign Up Confirmation`,
            react: CompanySignUpVerificationEmail({
               confirmationUrl: `/company/confirm-signup?email=${email}`,
               appName: APP_NAME,
               name: company.name,
            }),
         });

         return response.success ? company : null;
      } catch (err) {
         console.log({ err });
         return null;
      }
   }
}