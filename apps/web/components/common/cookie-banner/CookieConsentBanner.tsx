import CookieConsentBannerClientTwo from "./CookieConsentBannerClientTwo";
import { cookies } from "next/headers";

export interface CookieConsentBannerProps {
}

/**
 * A cookie consent banner displayed at the bottom of the page.
 * @constructor
 */
const CookieConsentBanner = async ({}: CookieConsentBannerProps) => {
   const consentCookie = cookies().get(`cookie-consent`);

   if (consentCookie?.value === `true`) return null;

   return (
      <CookieConsentBannerClientTwo />
   );
};

export default CookieConsentBanner;
