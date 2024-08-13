declare global {
   namespace PrismaJson {
      export interface CookiePreferences {
         Marketing: boolean;
         Necessary: boolean;
         Statistics: boolean;
         Functionality: boolean;
      }

      type UserMetadata = {
         "cookie-consent": boolean
         "cookie-preferences": CookiePreferences
      }

      type CompanyMetadata = {}


      type CompanyWorldwideInfo = {
         founded?: Date;
         employeeCount?: number;
         headquarters?: string;
         locations: string[]
      }

      type CompanyLocalInfo = {
         since?: Date;
         employeeCount?: number;
         locations: string[]
      }

      type CompanyContacts = {
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

      type CompanyContact = {
         city:string;
        address: string;
         coordinates: {
            lat: number;
            lng: number;
         },
         phone_number?: string;
      }
   }
}