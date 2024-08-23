import { JobListingEmploymentType, JobListingLevel, Prisma, WorkFromHome } from "@prisma/client";

export class JobListingQueryBuilder {
   private readonly filterClauses: Prisma.JobListingWhereInput[] = [];

   constructor() {

   }

   public withLocation(locations: string[]) {
      if(!locations?.length) return this;
      this.filterClauses.push({ location: { in: locations } });
      return this;
   }

   public withFrom(from: string) {
      if (!from?.length) return this;
      this.filterClauses.push({ parameters: { path: [`from`], equals: from } });
      return this;
   }

   public withFurlough(furlough: string) {
      if (!furlough?.length) return this;

      this.filterClauses.push({
         parameters: {
            path: [`furlough`],
            equals: furlough
         },
      });
      return this;
   }

   public withRemoteInterview(remoteInterview: boolean) {
      if(remoteInterview === undefined || remoteInterview === null) return this;

      this.filterClauses.push({ parameters: { path: [`remoteInterview`], equals: remoteInterview } });
      return this;
   }

   public withNoExperience(noExperience: boolean) {
      if(noExperience === undefined || noExperience === null) return this;

      this.filterClauses.push({ parameters: { path: [`noExperience`], equals: noExperience } });
      return this;
   }

   public withInternship(internship: boolean) {
      if(internship === undefined || internship === null) return this;

      this.filterClauses.push({ parameters: { path: [`internship`], equals: internship } });
      return this;
   }

   public withWorkFromHome(workFromHome: boolean) {
      if(workFromHome === undefined || workFromHome === null) return this;

      this.filterClauses.push({ work_from: workFromHome ? WorkFromHome.FullyRemote : WorkFromHome.Hybrid });
      return this;
   }

   public withLanguages(languages: string[]) {
      if (!languages?.length) return this;
      this.filterClauses.push({ languages: { hasSome: languages } });
      return this;
   }

   public withKeywords(keywords: string[]) {
      if (!keywords?.length) return this;
      this.filterClauses.push({ keywords: { hasSome: keywords } });
      return this;
   }

   public withCompanyIds(companyIds: string[]) {
      if (!companyIds?.length) return this;
      this.filterClauses.push({ company_id: { in: companyIds } });
      return this;
   }

   public withTypes(types: JobListingEmploymentType[]) {
      if (!types?.length) return this;
      this.filterClauses.push({ type: { in: types } });
      return this;
   }

   public withLevels(levels: JobListingLevel[]) {
      if (!levels?.length) return this;
      this.filterClauses.push({ level: { in: levels } });
      return this;
   }

   public withSalary(salary: string) {
      if (!salary?.length) return this;
      // Try and parse salary range:
      const matches = salary.match(/\d+([,.]?\d+)?/g);
      let [min, max] = [parseFloat(matches[0].replace(/,/g, ``)), parseFloat(matches[1].replace(/,/g, ``))];

      this.filterClauses.push({
         OR: [
            {
               AND: [
                  {
                     parameters: {
                        path: [`salary`, `type`], equals: `range`,
                     },
                  },
                  {
                     parameters: {
                        path: [`salary`, `min`], lte: min,
                     },
                  },
                  {
                     parameters: {
                        path: [`salary`, `max`], gte: min,
                     },
                  },
               ],
            },
            {
               AND: [
                  {
                     parameters: {
                        path: [`salary`, `type`], equals: `range`,
                     },
                  },
                  {
                     parameters: {
                        path: [`salary`, `min`], lte: max,
                     },
                  },
                  {
                     parameters: {
                        path: [`salary`, `max`], gte: max,
                     },
                  },
               ],
            },
            {
               AND: [
                  {
                     parameters: {
                        path: [`salary`, `type`], equals: `fixed`,
                     },
                  },
                  {
                     parameters: {
                        path: [`salary`, `value`], gte: min, lte: max,
                     },
                  },
               ],
            },
         ],
      });

      return this;
   }

   public withCategories(categories: string[]) {
      if (!categories?.length) return this;
      let filter = {
         OR: [{
            company: {
               categories: {
                  some: {
                     category: {
                        name: {
                           in: categories,
                           mode: Prisma.QueryMode.insensitive,
                        },
                     },
                  },
               },
            },
         },
            {
               categories: {
                  some: {
                     category: {
                        name: {
                           in: categories,
                           mode: Prisma.QueryMode.insensitive,
                        },
                     },
                  },
               },
            },
         ],
      };

      this.filterClauses.push(filter);
      return this;
   }

   get filter(): Prisma.JobListingWhereInput {
      return { AND: this.filterClauses };
   }
}