import { UserCoverLetterTemplateRelationsResolver } from "@generated/resolvers/relations";
import { UserCoverLetterTemplate } from "@generated/models/UserCoverLetterTemplate";
import { Arg, Authorized, Ctx, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { MyContext } from "@types";

@InputType()
export class CreateUserCoverLetterTemplateInput {
   @Field(() => String, { nullable: false })
   public name: string;

   @Field(() => String, { nullable: false })
   public content: string;
}

@Resolver(of => UserCoverLetterTemplate)
export class CoverLetterTemplateResolver extends UserCoverLetterTemplateRelationsResolver {

   @Authorized()
   @Query(() => [UserCoverLetterTemplate], { nullable: false })
   public async getMyCoverLetterTemplates(@Ctx() { userId, prisma }: MyContext) {
      let templates = await prisma.userCoverLetterTemplate.findMany({
         where: { user_id: userId },
      });
      return templates;
   }

   @Authorized()
   @Mutation(() => Boolean, { nullable: false })
   public async deleteAllCoverLetterTemplates(@Ctx() { userId, prisma }: MyContext) {
      try {
         let count = await prisma.userCoverLetterTemplate.deleteMany({
            where: { user_id: userId },
         });
         return true;
      } catch (e) {
         return false;
      }
   }

   @Authorized()
   @Mutation(() => UserCoverLetterTemplate, { nullable: true })
   public async createUserCoverLetterTemplate(
      @Arg("input", type => CreateUserCoverLetterTemplateInput, { nullable: false }) {
         content,
         name,
      }: CreateUserCoverLetterTemplateInput,
      @Ctx() { userId, prisma }: MyContext,
   ) {
      try {
         let template = await prisma.userCoverLetterTemplate.create({
            data: {
               user_id: userId,
               name,
               letter: content,
               metadata: {},
            },
         });
         return template;
      } catch (e) {
         return null;
      }
   }
}