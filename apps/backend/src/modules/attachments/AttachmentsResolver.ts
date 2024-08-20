import { UserAttachmentsRelationsResolver } from "@generated/resolvers/relations";
import { UserAttachments } from "@generated/models/UserAttachments";
import { Arg, Authorized, Ctx, Query, Resolver } from "type-graphql";
import { MyContext } from "@types";
import { GetAttachmentsByUserInput } from "@modules/attachments/models";
import { NoCache } from "@infrastructure/decorators";

@Resolver(of => UserAttachments)
export class AttachmentsResolver extends UserAttachmentsRelationsResolver {

   @Query(_ => [UserAttachments], { nullable: false })
   @NoCache()
   @Authorized()
   public async myAttachments(
      @Ctx() { prisma, userId }: MyContext,
      @Arg(`input`, _ => GetAttachmentsByUserInput, { nullable: false }) {
         skip,
         limit,
         type,
      }: GetAttachmentsByUserInput): Promise<UserAttachments[]> {
      return await prisma.userAttachments.findMany({
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
      }) as UserAttachments[];
   }
}