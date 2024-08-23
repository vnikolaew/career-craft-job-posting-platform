import { Field, InputType, Int, ObjectType } from "type-graphql";
import { FurloughPeriod, JobListingFrom, JobListingSalary } from "@modules/subscriptions/models";
import { Max, Min } from "class-validator";
import { JobListingEmploymentType, JobListingLevel } from "@generated/enums";

@ObjectType()
export class JobListingParameters {
   @Field(_ => Boolean, { nullable: true })
   public remoteInterview?: boolean;

   @Field(of => FurloughPeriod, { nullable: false })
   public furlough: FurloughPeriod;

   @Field(of => JobListingFrom, { nullable: true })
   public from: JobListingFrom;

   @Field(_ => JobListingSalary, { nullable: true })
   public salary?: JobListingSalary;

   @Field(_ => Boolean, { nullable: true })
   public internship?: boolean;
}


@InputType()
export class GetRelevantCompaniesInput {

   @Field(() => Int, { nullable: true, defaultValue: 10 })
   @Min(0)
   @Max(100)
   public limit: number = 10;

   @Field(() => Int, { nullable: true, defaultValue: 0 })
   @Min(0)
   public skip: number = 0;

   @Field(_ => [String], { nullable: true })
   public categories?: string[];
}

@InputType()
export class SearchJobListingsInput {

   @Field(() => Int, { nullable: true, defaultValue: 10 })
   @Min(0)
   @Max(100)
   public limit: number = 10;

   @Field(() => Int, { nullable: true, defaultValue: 0 })
   @Min(0)
   public skip: number = 0;

   @Field(_ => [String], { nullable: true })
   public categories?: string[];

   @Field(_ => [String], { nullable: true })
   public locations?: string[];

   @Field(_ => [String], { nullable: true })
   public professions?: string[];

   @Field(_ => [String], { nullable: true })
   public keywords?: string[];

   @Field(_ => [String], { nullable: true })
   public languages?: string[];

   @Field(_ => [String], { nullable: true })
   public companyIds?: string[];

   @Field(_ => String, { nullable: true })
   public salary?: string;

   @Field(_ => [JobListingEmploymentType], { nullable: true })
   public types?: JobListingEmploymentType[];

   @Field(_ => Boolean, { nullable: true })
   public internship?: boolean;

   @Field(_ => Boolean, { nullable: true })
   public noExperience?: boolean;

   @Field(_ => Boolean, { nullable: true })
   public remoteInterview?: boolean;

   @Field(_ => Boolean, { nullable: true })
   public workFromHome?: boolean;

   @Field(_ => [JobListingLevel], { nullable: true })
   public levels?: JobListingLevel[];

   @Field(_ => JobListingFrom, { nullable: true })
   public from?: JobListingFrom;

   @Field(_ => FurloughPeriod, { nullable: true })
   public furlough?: FurloughPeriod;
}


@ObjectType ()
export class GetJobListingLevelsDetailsResponse {

   @Field(() => String, { nullable: true, defaultValue: 10 })
   public name: string

   @Field(() => Int, { nullable: false, defaultValue: 0 })
   public totalJobsCount: number = 0;
}

@ObjectType ()
export class GetKeywordsDetailsResponse {

   @Field(() => String, { nullable: true })
   public name: string

   @Field(() => Int, { nullable: false, defaultValue: 0 })
   public totalJobsCount: number = 0;
}

@ObjectType ()
export class GetEmploymentTypeDetailsResponse {

   @Field(() => String, { nullable: true })
   public name: string

   @Field(() => Int, { nullable: false, defaultValue: 0 })
   public totalJobsCount: number = 0;
}
