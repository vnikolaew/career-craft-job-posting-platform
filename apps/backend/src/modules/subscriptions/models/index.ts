import { Field, InputType, Int, InterfaceType, ObjectType, registerEnumType } from "type-graphql";
import { GraphQLCurrency } from "graphql-scalars";
import {
   JobListingEmploymentType,
   JobListingLevel,
   JobListingSubscriptionNotificationFrequency,
   WorkFromHome,
} from "@generated/enums";
import { Max, Min } from "class-validator";

export enum FurloughPeriod {
   TwentyOneToTwentyFive = "21-25",
   TwentyFiveToThirty = "25-30",
   ThirtyPlus = "30+"
}

export enum JobListingFrom {
   "DirectEmployer" = "direct-employer",
   "Agencies" = "agencies",
}

registerEnumType(FurloughPeriod, {
   name: `FurloughPeriod`,
});

registerEnumType(JobListingFrom, {
   name: `JobListingFrom`,
});

@InterfaceType({
   resolveType: (value) => {
      if (typeof value.min === "number") return `RangeJobListingSalary`;
      else return `FixedJobListingSalary`;
   },
})
@InputType(`JobListingSalaryInput`)
export abstract class JobListingSalary {
   @Field(of => GraphQLCurrency)
   public currency: string;

   public abstract type: string;
}

@ObjectType(`RangeJobListingSalary`, { implements: JobListingSalary })
export class RangeJobListingSalary extends JobListingSalary {
   type: string = `range`;

   @Field(of => Number)
   min: number;

   @Field(of => Number)
   max: number;
}

@ObjectType(`FixedJobListingSalary`, { implements: JobListingSalary })
export class FixedJobListingSalary extends JobListingSalary {
   type: string = `fixed`;

   @Field(of => Number)
   value: number;
}

@InputType()
export class CompanyCategoryInput {
   @Field(of => String, { nullable: false })
   id: string;

   @Field(of => String, { nullable: false })
   name: string;
}

@InputType()
export class JobCategoryInput {
   @Field(of => String, { nullable: false })
   id: string;

   @Field(of => String, { nullable: false })
   name: string;
}

@InputType(`JobListingParametersInput`)
export class JobListingParametersInput {

   @Field(of => JobListingSalary, { nullable: true })
   salary: JobListingSalary;

   @Field(of => FurloughPeriod, { nullable: true })
   furlough: FurloughPeriod;

   @Field(of => JobListingFrom, { nullable: true })
   from: JobListingFrom;

   @Field(of => Boolean, { nullable: true })
   remoteInterview?: boolean;

   @Field(of => Boolean, { nullable: true })
   internship?: boolean;
}

@InputType()
export class SubscribeToJobListingsInput {
   @Field(of => String, { nullable: true })
   public companyId?: string;

   @Field(of => JobListingSubscriptionNotificationFrequency, { nullable: false })
   public frequency: JobListingSubscriptionNotificationFrequency;

   @Field(of => String, { nullable: true })
   public location?: string;

   @Field(of => [CompanyCategoryInput], { nullable: false })
   public categories: CompanyCategoryInput[];

   @Field(of => [JobCategoryInput], { nullable: false })
   public job_categories: JobCategoryInput[];

   @Field(of => [String], { nullable: false })
   public languages?: string[];

   @Field(of => [String], { nullable: false })
   public keywords?: string[];

   @Field(of => JobListingEmploymentType, { nullable: true })
   public employmentType?: JobListingEmploymentType;

   @Field(of => JobListingLevel, { nullable: true })
   public level?: JobListingLevel;

   @Field(of => WorkFromHome, { nullable: true })
   public workFromHome?: WorkFromHome;

   @Field(of => JobListingParametersInput, { nullable: true })
   public parameters?: JobListingParametersInput;
}

@InputType()
export class GetSubscriptionsInput {

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
export class DeleteAllSubscriptionsResponse {
   @Field(() => Boolean, { nullable: false })
   public success: boolean;

   @Field(() => Int, { nullable: false, defaultValue: 0 })
   public deleted_count: number;
}


@ObjectType()
export class GetSubscriptionsJobListingsResponse {
   @Field(of => [SubscriptionJobListingsResponse], { nullable: false })
   public entries: SubscriptionJobListingsResponse [];
}

@ObjectType()
export class SubscriptionJobListingsResponse {

   @Field(() => String, { nullable: false })
   public subscriptionId: string;

   @Field(() => [String], { nullable: false })
   public listingIds: string[];
}

