import { prisma, xprisma } from "@prisma/prisma";
import { parseArgs } from "node:util";
import bcrypt from "bcryptjs";
import categories from "@/data/categories.json"
import { User } from "@prisma/client";

const options = {
   environment: { type: "string" as const },
};

async function main() {
   const { values: { environment } } = parseArgs({
      options,
   });

   if (environment === `development`) {
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

      let usersCount = await xprisma.user.count();
      if(usersCount === 0) {
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

      let categoryCount = await prisma.companyCategory.count()
      if(categoryCount === 0) {
         await prisma.companyCategory.createMany({
            data: categories
         })
      }
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