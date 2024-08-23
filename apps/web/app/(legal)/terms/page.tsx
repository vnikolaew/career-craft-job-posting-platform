import React from "react";
import moment from "moment/moment";
import { APP_NAME, COMPANY_DETAILS, LINKS } from "@/config/site";
import Link from "next/link";

export interface PageProps {
}

const Page = async ({}: PageProps) => {
   return (
      <div className={`my-12 w-full mx-auto`}>
         <h2 className={`text-4xl font-semibold`}>
            Terms & Conditions
         </h2>
         <p className={`text-neutral-500 mt-4`}>Last
            updated: <time>{moment(new Date(2024, 7, 11)).format(`MMMM Do YYYY`)}</time></p>
         <div className={`w-1/2 divider my-4`} />
         <div className={`text-lg w-3/4`}>
            <p>Welcome to {APP_NAME}'s Terms & Conditions Page. By accessing or using our website and services, you
               agree to comply
               with and be bound by the following terms and conditions. Please read these terms carefully, and do not
               use the platform if you disagree with any part of these terms.</p>

            <h2 className={`text-3xl font-semibold mt-6`}>1. Acceptance of Terms</h2>
            <p className={`mt-4`}>By accessing and using our platform, you accept and agree to be bound by these Terms &
               Conditions, as
               well as our Privacy Policy, which is incorporated herein by reference.</p>

            <h2 className={`text-3xl font-semibold mt-6`}>2. User Responsibilities</h2>
            <p className={`mt-4`}>As a user of our platform, you agree to:</p>
            <ul>
               <li>Provide accurate, current, and complete information about yourself as prompted by our registration
                  forms.
               </li>
               <li>Maintain the security and confidentiality of your account and password.</li>
               <li>Notify us immediately of any unauthorized use of your account or any other breach of security.</li>
               <li>Use the platform in compliance with all applicable laws and regulations.</li>
            </ul>

            <h2 className={`text-3xl font-semibold mt-6`}>3. Use of the Platform</h2>
            <p className={`mt-4`}>You agree to use our platform only for lawful purposes and in accordance with these
               Terms & Conditions.
               You agree not to:</p>
            <ul>
               <li>Post any content that is unlawful, defamatory, abusive, obscene, or otherwise objectionable.</li>
               <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a
                  person or entity.
               </li>
               <li>Engage in any activity that could disable, overburden, or impair the functioning of the platform or
                  interfere with any other party's use and enjoyment of the platform.
               </li>
               <li>Use any automated system, including but not limited to robots, spiders, or offline readers, to access
                  the platform for any purpose without our express written permission.
               </li>
            </ul>

            < h2 className={`text-3xl font-semibold mt-6`}>4. Job Listings and Applications</h2>
            <p className={`mt-4`}>We provide a platform for employers to post job listings and for job seekers to apply
               for jobs. While we
               strive to ensure the quality and accuracy of the job listings, we do not endorse, warrant, or guarantee
               the legitimacy of any job listing, employer, or applicant. You assume all risks associated with using the
               platform and applying for jobs.</p>

            <h2 className={`text-3xl font-semibold mt-6`}>5. Fees and Payments</h2>
            <p className={`mt-4`}>Certain features of the platform may require payment of fees. You agree to pay all
               applicable fees as
               described on the platform in connection with those features you select to use. We reserve the right to
               change our fees at any time by posting the changes on the platform with appropriate notice.</p>

            <h2 className={`text-3xl font-semibold mt-6`}>6. Termination</h2>
            <p className={`mt-4`}>We reserve the right, at our sole discretion, to terminate your account or access to
               the platform at any
               time, without notice, for any reason, including but not limited to breach of these Terms & Conditions.
               Upon termination, your right to use the platform will immediately cease.</p>

            <h2 className={`text-3xl font-semibold mt-6`}>7. Intellectual Property</h2>
            <p className={`mt-4`}>The platform and its entire contents, features, and functionality (including but not
               limited to all
               information, software, text, displays, images, video, and audio) are owned by us, our licensors, or other
               providers of such material and are protected by international copyright, trademark, patent, trade secret,
               and other intellectual property or proprietary rights laws.</p>

            <h2 className={`text-3xl font-semibold mt-6`}>8. Limitation of Liability</h2>
            <p className={`mt-4`}>In no event shall we, our affiliates, or our respective officers, directors,
               employees, agents,
               suppliers, or licensors be liable for any indirect, incidental, special, consequential, or punitive
               damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
               resulting from (i) your use or inability to use the platform; (ii) any unauthorized access to or use of
               our servers and/or any personal information stored therein; (iii) any interruption or cessation of
               transmission to or from the platform; (iv) any bugs, viruses, trojan horses, or the like that may be
               transmitted to or through the platform by any third party; (v) any errors or omissions in any content or
               for any loss or damage incurred as a result of your use of any content posted, emailed, transmitted, or
               otherwise made available through the platform, whether based on warranty, contract, tort, or any other
               legal theory, whether or not we have been informed of the possibility of such damage.</p>

            <h2 className={`text-3xl font-semibold mt-6`}>9. Indemnification</h2>
            <p className={`mt-4`}>You agree to indemnify, defend, and hold harmless us, our affiliates, and our
               respective officers,
               directors, employees, agents, suppliers, or licensors from and against any claims, liabilities, damages,
               judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of
               or relating to your violation of these Terms & Conditions or your use of the platform, including, but not
               limited to, your User Contributions, any use of the platform's content, services, and products other than
               as expressly authorized in these Terms & Conditions or your use of any information obtained from the
               platform.</p>

            <h2 className={`text-3xl font-semibold mt-6`}>10. Governing Law</h2>
            <p className={`mt-4`}>These Terms & Conditions and any dispute or claim arising out of, or related to them,
               shall be governed
               by and construed in accordance with the internal laws of the [Country/State], without giving effect to
               any choice or conflict of law provision or rule (whether of the [Country/State] or any other
               jurisdiction).</p>

            <h2 className={`text-3xl font-semibold mt-6`}>11. Changes to These Terms</h2>
            <p className={`mt-4`}>We may revise and update these Terms & Conditions from time to time in our sole
               discretion. All changes
               are effective immediately when we post them and apply to all access to and use of the platform
               thereafter. Your continued use of the platform following the posting of revised Terms & Conditions means
               that you accept and agree to the changes.</p>

            <h2 className={`text-3xl font-semibold mt-6`}>12. Contact Us</h2>
            < p className={`mt-4`}>If you have any questions about these Terms & Conditions, please contact us at:</p>
            <p className={`mt-4`}><strong>Email:</strong>
               <Link className={`link link-hover text-green-600`}
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