import { Field, InputType, Int, ObjectType } from "type-graphql";

@InputType()
export class GetApplicationsByUserInput {
   @Field(of => Int, { nullable: true, defaultValue: 10 })
   public limit: number;

   @Field(of => Int, { nullable: true, defaultValue: 0 })
   public skip: number;

   @Field(of => String, { nullable: true, defaultValue: `` })
   public type: string;
}