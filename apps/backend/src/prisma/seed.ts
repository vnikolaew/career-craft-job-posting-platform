import { xprisma } from "@prisma/prisma";
import { parseArgs } from "node:util";
import bcrypt from "bcryptjs";
import categoriesJson from "@/data/categories.json";
import listingsJson from "@/data/job_listings.json";
import {
   Company,
   CompanyCategory,
   JobListing,
   JobListingCategory,
   JobListingEmploymentType,
   JobListingLevel,
   User,
   WorkFromHome,
} from "@prisma/client";
import companiesJson from "@/data/companies.json";
import moment from "moment";
import _ from "lodash";

const options = {
   environment: { type: "string" as const },
};

async function seedListings() {
   let count = await xprisma.jobListing.count();
   if (count > 0) return;

   const allCompanies = await xprisma.company.findMany({
      include: { categories: { include: { category: true } } },
   });

   const listings: (JobListing & { categories: JobListingCategory[] })[] = listingsJson
      .map(({ companyId, ...l }) => {
         const company_id = allCompanies.map(c => c.categories.map(({ category: { name, description, id } }) => ({
            name,
            id,
            description,
            companyId: c.id,
         }))).map(c => {
            let intersection = _.intersectionBy(c, l.categories as JobListingCategory[], c => c.name).length;
            return { categories: c, intersection };
         }).sort((a, b) => b.intersection - a.intersection)
            .map(c => c.categories)
            .at(0)?.at(0)?.companyId;

         return ({
            ...l,
            company_id,
            level: l.level as JobListingLevel,
            work_from: l.work_from as WorkFromHome,
            type: l.type as JobListingEmploymentType,
            createdAt: moment(l.createdAt).isValid() ? moment(l.createdAt).toDate() : moment().subtract(1, `d`).toDate(),
            updatedAt: moment(l.updatedAt).isValid() ? moment(l.updatedAt).toDate() : moment().subtract(1, `d`).toDate(),
         });
      });

   for (let { categories, ...listing } of listings) {
      let { id } = await xprisma.jobListing.create({
         data: {
            ...listing,
         },
      });
      Object.assign(listing, { id });
   }

   const listingCategories = _.uniqBy(listings.flatMap(l => l.categories
         .map(c => ({ ...c, listingId: l.id }))),
      c => c.name);

   let categoryToListingMap = new Map<string, string[]>();

   for (let { name, description, listingId } of listingCategories) {
      let category = await xprisma.jobListingCategory.create({
         data: {
            name, description,
         },
      });

      let listings = categoryToListingMap.get(category.id);
      if (listings === undefined) {
         categoryToListingMap.set(category.id, [listingId]);
      } else {
         listings.push(listingId);
         categoryToListingMap.set(category.id, listings);
      }
   }

   for (let [categoryId, listingIds] of categoryToListingMap.entries()) {
      await xprisma.categoryOnJobListing.createMany({
         data: listingIds.map(id => ({ listing_id: id, category_id: categoryId })),
      });
   }

}

async function seedCompanies() {
   let count = await xprisma.company.count();
   if (count > 0) return;

   let companies: (Company & { categories: Omit<CompanyCategory, "id">[] })[] =
      companiesJson.map(({ id, ...c }) => ({
         ...c,
         createdAt: moment(c.createdAt).toDate(),
         updatedAt: moment(c.updatedAt).toDate(),
      }));

   const companiesMap = new Map<string, Company>();
   for (const { categories, listings, ...company } of companies) {
      let { id } = await xprisma.company.create({
         data: { ...company },
      });
      companiesMap[id] = { categories, listings, ...company };
   }

   let categories = _.uniqBy(Object.entries(companiesMap)
         .flatMap(([id, company]) => company.categories
         .map(c => ({ ...c, companyId: id }))).concat(categoriesJson.map(c => ({ ...c, companyId: `` }))),
      c => c.name);

   let categoryToCompanyMap = new Map<string, string[]>();

   for (let { name, description, companyId } of categories) {
      let category = await xprisma.companyCategory.create({
         data: { name, description },
      });
      if (!companyId?.length) continue;

      let companies = categoryToCompanyMap.get(category.id);
      if (companies === undefined) {
         categoryToCompanyMap.set(category.id, [companyId]);
      } else {
         companies.push(companyId);
         categoryToCompanyMap.set(category.id, companies);
      }
   }

   for (let [categoryId, companyIds] of categoryToCompanyMap.entries()) {
      await xprisma.categoryOnCompany.createMany({
         data: companyIds.map(companyId => ({ company_id: companyId, category_id: categoryId })),
      });
   }
}

async function seedUsers() {
   let count = await xprisma.user.count();
   if (count > 0) return;

   const DEFAULT_USER_AVATAR_URL = `https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg`;

   const DEFAULT_USERS: Partial<User>[] = [
      {
         email: `victorio.nikolaev25@gmail.com`,
         name: `vnikolaew`,
         first_name: `Victorio`,
         last_name: `Nikolaev`,
         password: bcrypt.hashSync(`vNikolaew123!`, 10),
         image: DEFAULT_USER_AVATAR_URL,
      },
      {
         email: `vikinik01@abv.bg`,
         name: `vnikolaew2`,
         first_name: `Victorio`,
         last_name: `Nikolaev`,
         password: bcrypt.hashSync(`vNikolaew123!`, 10),
         image: DEFAULT_USER_AVATAR_URL,
      },
   ];


   for (let user of DEFAULT_USERS) {
      let dbUser = await xprisma.user.upsert({
         where: {
            email: user.email,
         },
         create: { ...user },
         update: {},
      });

      console.log(`Seeded user: `, { user: dbUser });
   }

}

async function main() {
   const { values: { environment } } = parseArgs({
      options,
   });

   if (environment === `development`) {
      await seedUsers();
      await seedCompanies();
      await seedListings();
   }
}

main()
   .then(async () => {
      await xprisma.$disconnect();
   })
   .catch(async (e) => {
      console.error(e);
      await xprisma.$disconnect();
      process.exit(1);
   });