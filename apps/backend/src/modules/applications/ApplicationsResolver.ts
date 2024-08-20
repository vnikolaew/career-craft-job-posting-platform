import { UserJobApplicationRelationsResolver } from "@generated/resolvers/relations";
import { UserJobApplication } from "@generated/models/UserJobApplication";
import { Arg, Authorized, Ctx, Query, Resolver } from "type-graphql";
import { NoCache } from "@infrastructure/decorators";
import { MyContext } from "@types";
import { GetApplicationsByUserInput } from "@modules/applications/models";

@Resolver(of => UserJobApplication)
export class ApplicationsResolver extends UserJobApplicationRelationsResolver {

   @Query(_ => [UserJobApplication], { nullable: false })
   @NoCache()
   @Authorized()
   public async myApplications(
      @Ctx() { prisma, userId }: MyContext,
      @Arg(`input`, _ => GetApplicationsByUserInput, { nullable: false }) {
         skip,
         limit,
         type,
      }: GetApplicationsByUserInput): Promise<UserJobApplication[]> {
      return await prisma.userJobApplication.findMany({
         where: {
            user_id: userId,
            ...(type ? {
               attachment_extension: {
                  contains: type,
                  mode: `insensitive`,
               },
            } : {}),
         },
         skip,
         take: limit,
      }) as UserJobApplication[];
   }
}