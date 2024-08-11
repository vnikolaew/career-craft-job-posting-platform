declare global {
   namespace PrismaJson {
      export interface CookiePreferences {
         Marketing: boolean;
         Necessary: boolean;
         Statistics: boolean;
         Functionality: boolean;
      }

      type UserMetadata = {
         bio: string
         github: string
         twitter: string
         website: string
         keyboard: string
         ogAccount: boolean
         "cookie-consent": boolean
         "cookie-preferences": CookiePreferences
      }
   }
}