import { JobListingCrudResolver as Base } from "@generated/resolvers/crud";

import { JobListing } from "@generated/models/JobListing";

import { Authorized, Ctx, Directive, FieldResolver, Resolver, Root } from "type-graphql";
import { MyContext } from "@types";

@Resolver(of => JobListing)
export class JobListingCrudResolver extends Base {
   constructor() {
      super();
   }

   @FieldResolver(of => Boolean, { nullable: true })
   @Authorized()
   @Directive("@client")
   public async isSaved(@Root() jobListing: JobListing, @Ctx() { prisma, userId }: MyContext): Promise<boolean> {
      return false;

      let savedListings = await prisma.savedListing.findMany({
         where: { userId },
         select: { id: true, listing_id: true },
      });

      return savedListings?.some(l => l?.listing_id === jobListing.id);
   }
}
