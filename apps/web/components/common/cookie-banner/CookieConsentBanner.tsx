import CookieConsentBannerClientTwo from "./CookieConsentBannerClientTwo";
import { cookies, headers } from "next/headers";
import { client } from "@/providers/apollo/client";
import { gql } from "@/__generated__";

export interface CookieConsentBannerProps {
}

const ME_QUERY = gql(/* GraphQL */`
    query MeQuery {
        me {
            id
            name
            first_name
            last_name
            email
            image
            metadata
            cookieConsent
            cookiePreferences {
                functionality
                marketing
                necessary
                statistics
            }
            saved_listings {
                id
                listing_id
                metadata
                createdAt
            }
        }
    }
`);

/**
 * A cookie consent banner displayed at the bottom of the page.
 * @constructor
 */
const CookieConsentBanner = async ({}: CookieConsentBannerProps) => {
   const consentCookie = cookies().get(`cookie-consent`);
   let cookie = headers().get(`cookie`)!;

   const { data } = await client.authenticatedQuery(cookie, {
      query: ME_QUERY,
   });

   if (consentCookie?.value === `true` || !data?.me?.id?.length) return null;

   return (
      <CookieConsentBannerClientTwo />
   );
};

export default CookieConsentBanner;
