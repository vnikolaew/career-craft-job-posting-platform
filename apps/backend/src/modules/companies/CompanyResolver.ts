import { CompanyRelationsResolver } from "@generated/resolvers/relations";
import { Company } from "@generated/models/Company";
import { Ctx, Query, Resolver } from "type-graphql";
import { MyContext } from "@types";

@Resolver(of => Company)
export class CompanyResolver extends CompanyRelationsResolver {
   @Query(_ => [Company], { nullable: false })
   public async topCompanies(@Ctx() { prisma }: MyContext): Promise<Company[]> {
      let companies = await prisma.company.findMany({
         take: 10,
         include: { _count: { select: { listings: true, categories: true } } },
      });

      return companies;
   }
}