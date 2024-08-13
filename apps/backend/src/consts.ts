export const APP_NAME = `Career Craft`;
export const AUTHOR = `Victorio Nikolaev`;

export const AUTHOR_WEBSITE = `www.career-craft.com`;
export const APP_HOST_NAME = `career-craft`;
export const APP_DESCRIPTION = `A Job Listings and Postings Web Platform`;
export const APP_DESCRIPTION_LONGER = `A Job Listings and Postings Web Platform`;

export const APP_KEYWORDS = [
   `jobs`,
   `job listings`,
   `job postings`,
   `career`,
   `job board`,
   `job search`,
];

export const APP_VERSION = `1.0.0`;

export const COMPANY_DETAILS = {
   streetAddress: `Sample Street 100`,
   city: `Varna`,
   zipCode: 9000,
   country: `Bulgaria`,
};

export const LINKS = {
   twitter: `https://twitter.com/vnikolaew25`,
   github: `https://github.com/vnikolaew`,
   discord: `https://discord.gg/San8FrTghW`,
   linkedIn: `https://www.linkedin.com/in/victorio-nikolaev-384a43298`,
   email: `victorio.nikolaev25@gmail.com`,
   supportEmail: `victorio.nikolaev25@gmail.com`,
} as const;

export const __IS_DEV__ = process.env.NODE_ENV === `development`;
export const __IS_HTTPS__ = process.env.HTTPS === `true`;
