declare global {
   namespace PrismaJson {
      export interface CookiePreferences {
         Marketing: boolean;
         Necessary: boolean;
         Statistics: boolean;
         Functionality: boolean;
      }

      export type UserMetadata = {
         "cookie-consent": boolean
         "cookie-preferences": CookiePreferences
      }

      export type CompanyMetadata = {}


      export type CompanyWorldwideInfo = {
         founded?: Date;
         employeeCount?: number;
         headquarters?: string;
         locations: string[]
      }

      export type CompanyLocalInfo = {
         since?: Date;
         employeeCount?: number;
         locations: string[]
      }

      export type CompanyContacts = {
         name: string;
         company_bulstat?: string;

         contacts: CompanyContact[]
         email?: string;
         phone_number?: string;
         address?: string;
         website_url?: string;
         facebook_url?: string;
         twitter_url?: string;
         linkedin_url?: string;
         youtube_url?: string;

      }

      export type CompanyContact = {
         city: string;
         address: string;
         coordinates: {
            lat: number;
            lng: number;
         },
         phone_number?: string;
      }

      export type JobListingSalaryType = `range` | `fixed`

      export type JobListingSalary = { currency: string } & ({
         type: `range`,
         min: number
         max: number
      } | { type: `fixed`, value: number })

      export type FurloughPeriod = 'TwentyOneToTwentyFive' | 'TwentyFiveToThirty' | 'ThirtyPlus'
      export type JobListingFrom = 'DirectEmployer' | `Agencies`

      export type JobListingParameters = {
         salary: JobListingSalary
         furlough: FurloughPeriod
         from: JobListingFrom
         remoteInterview? : boolean
         internship? : boolean
      }

   }
}