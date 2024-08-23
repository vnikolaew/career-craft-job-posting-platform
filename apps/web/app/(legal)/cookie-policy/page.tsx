import React from "react";
import moment from "moment/moment";
import Link from "next/link";
import { COMPANY_DETAILS, LINKS } from "@/config/site";

export interface PageProps {
}

const Page = ({}: PageProps) => {
   return (
      <div className={`my-12 w-full mx-auto`}>
         <h2 className={`text-4xl font-semibold`}>
            Cookie Policy
         </h2>
         <p className={`text-neutral-500 mt-4`}>Last
            updated: <time>{moment(new Date(2024, 7, 11)).format(`MMMM Do YYYY`)}</time></p>
         <div className={`w-1/2 divider my-4`} />
         <div className={`text-lg w-3/4`}>
            <h2 className={`text-3xl font-semibold mt-6`}>
               What are cookies?
            </h2>
            <p className={`mt-4`}>Cookies are small data files that are placed on your computer or mobile device when
               you visit a website.
               Cookies are widely used by website owners to make their websites work, or to work more efficiently, as
               well as to provide reporting information.</p>

            <h2 className={`text-3xl font-semibold mt-6`}>Why do we use cookies?</h2>
            <p className={`mt-4`}>We use cookies and similar technologies for several reasons, such as:</p>
            <ul className={`list-disc flex flex-col items-start gap-2 mt-2 pl-4`}>
               <li>To make our website function properly</li>
               <li>To improve the user experience</li>
               <li>To analyze how our website is used</li>
               <li>To personalize content and ads</li>
               <li>To offer social sharing features</li>
            </ul>

            <h2 className={`text-3xl font-semibold mt-6`}>What types of cookies do we use?</h2>
            <p className={`mt-4`}>We use the following types of cookies on our website:</p>
            <ul className={`mt-4 flex flex-col gap-4`}>
               <li><strong>Essential cookies:</strong> These cookies are necessary for the website to function and
                  cannot be switched off in our systems. They are usually only set in response to actions made by you,
                  such as setting your privacy preferences, logging in, or filling in forms.
               </li>
               <li><strong>Analytical/performance cookies:</strong> These cookies allow us to count visits and traffic
                  sources, so we can measure and improve the performance of our site. They help us understand how
                  visitors interact with our website.
               </li>
               <li><strong>Functional cookies:</strong> These cookies enable the website to provide enhanced
                  functionality and personalization. They may be set by us or by third-party providers whose services we
                  have added to our pages.
               </li>
               <li><strong>Targeting/advertising cookies:</strong> These cookies may be set through our site by our
                  advertising partners. They may be used by those companies to build a profile of your interests and
                  show you relevant ads on other sites.
               </li>
            </ul>

            <h2 className={`text-3xl font-semibold mt-6`}>How can you control cookies?</h2>
            <p className={`mt-4`}> You can set your browser to refuse all or some browser cookies, or to alert you when
               cookies are being
               sent. For more information on how to do this, please visit <a href="https://www.allaboutcookies.org/"
                                                                             target="_blank">www.allaboutcookies.org</a>.
            </p>

            <h2 className={`text-3xl font-semibold mt-6`}>Changes to this Cookie Policy</h2>
            <p className={`mt-4`}>We may update this Cookie Policy from time to time in order to reflect, for example,
               changes to the
               cookies we use or for other operational, legal, or regulatory reasons. Please periodically review this
               Cookie Policy for the latest information on our use of cookies.</p>


            <h2 className={`text-3xl font-semibold mt-6`}>7. Contact Us</h2>
            <p className={`mt-4`}>If you have questions or comments about this Cookie Policy, please contact us at:</p>
            <p className={`mt-4`}><strong>Email:</strong> <Link className={`link link-hover text-green-600`}
                                                                href={`mailto:${LINKS.supportEmail}`}>{LINKS.supportEmail}</Link>
            </p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p>
               <strong>Address:</strong> {COMPANY_DETAILS.streetAddress}, {COMPANY_DETAILS.city}, {COMPANY_DETAILS.zipCode}, {COMPANY_DETAILS.country}
            </p>
         </div>
      </div>
   );
};

export default Page;