import { Field, InputType, Int, ObjectType } from "type-graphql";
import { FurloughPeriod, JobListingFrom, JobListingSalary } from "@modules/subscriptions/models";
import { Max, Min } from "class-validator";

@ObjectType()
export class JobListingParameters {
   @Field(_ => Boolean, { nullable: true })
   public remoteInterview?: boolean;

   @Field(of => FurloughPeriod, { nullable: false })
   public furlough: FurloughPeriod;

   @Field(of => JobListingFrom, { nullable: false })
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

   @Field(_ => String, { nullable: true })
   public category?: string;
}
