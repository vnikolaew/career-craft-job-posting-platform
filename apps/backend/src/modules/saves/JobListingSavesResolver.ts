import { SavedListingRelationsResolver } from "@generated/resolvers/relations";
import { SavedListing } from "@generated/models/SavedListing";
import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { MyContext } from "@types";

@Resolver(of => SavedListing)
export class JobListingSavesResolver extends SavedListingRelationsResolver {

   @Mutation(of => SavedListing, { nullable: true })
   @Authorized()
   public async saveJobListing(
      @Ctx() { prisma, userId }: MyContext,
      @Arg("listingId", of => String) listingId: string): Promise<SavedListing | null> {
      let save = await prisma.savedListing.findFirst({
         where: { listingId, userId },
      });
      if (save) return null;

      save = await prisma.savedListing.create({
         data: {
            listingId,
            userId,
            metadata: {},
         },
      });

      return save as SavedListing;
   }

   @Mutation(of => Boolean, { nullable: true })
   @Authorized()
   public async unSaveJobListing(
      @Ctx() { prisma, userId }: MyContext,
      @Arg("listingId", of => String) listingId: string): Promise<boolean | null> {
      let save = await prisma.savedListing.findFirst({
         where: { listingId, userId },
      });
      if (!save) return false;

      save = await prisma.savedListing.delete({
         where: {  id: save.id },
      });

      return true
   }
}