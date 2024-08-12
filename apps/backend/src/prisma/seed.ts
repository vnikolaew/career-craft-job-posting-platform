import { xprisma } from "@prisma/prisma";
import { parseArgs } from "node:util";
import bcrypt from "bcryptjs";

const options = {
   environment: { type: "string" as const },
};

async function main() {
   const { values: { environment } } = parseArgs({
      options,
   });

   if (environment === `development`) {
      const DEFAULT_USER_AVATAR_URL = `https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg`;

      const DEFAULT_USERS = [
         {
            email: `victorio.nikolaev25@gmail.com`,
            name: `vnikolaew`,
            password: bcrypt.hashSync(`vNikolaew123!`, 10),
            image: DEFAULT_USER_AVATAR_URL,
         },
         {
            email: `vikinik01@abv.bg`,
            name: `vnikolaew2`,
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