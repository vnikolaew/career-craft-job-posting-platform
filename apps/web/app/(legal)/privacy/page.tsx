import React from "react";
import moment from "moment";
import Link from "next/link";
import { APP_NAME, COMPANY_DETAILS, LINKS } from "@/config/site";

export interface PageProps {
}

const Page = ({}: PageProps) => {
   return (
      <div className={`my-12 w-full mx-auto`}>
         <h2 className={`text-4xl font-semibold`}>
            Privacy Policy
         </h2>
         <p className={`text-neutral-500 mt-4`}>Last
            updated: <time>{moment(new Date(2024, 7, 11)).format(`MMMM Do YYYY`)}</time></p>
         <div className={`w-1/2 divider my-4`} />
         <div className={`text-lg w-3/4`}>
            <p>
               Welcome to our {APP_NAME}'s Privacy Policy page. Your privacy is important to us, and this Privacy Policy explains
               how we collect, use, disclose, and safeguard your information when you visit our website. Please read
               this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not
               access the site.</p>

            <h2 className={`text-3xl font-semibold mt-6`}>
               1. Information We Collect</h2>
            <p className={`mt-4`}>We may collect information about you in a variety of ways. The information we may collect on the Site
               includes:</p>
            <ul>
               <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email
                  address, and contact information that you voluntarily give to us when you register on the Site or when
                  you choose to participate in various activities related to the Site, such as applying for a job or
                  posting a job listing.
               </li>
               <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the
                  Site, such as your IP address, browser type, operating system, access times, and the pages you have
                  viewed directly before and after accessing the Site.
               </li>
               <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method
                  (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase,
                  order, return, exchange, or request information about our services from the Site.
               </li>
            </ul>

            <h2 className={`text-3xl font-semibold mt-6`}>2. Use of Your Information</h2>
            <p className={`mt-4`}>Having accurate information about you permits us to provide you with a smooth, efficient, and customized
               experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul>
               <li>Create and manage your account.</li>
               <li>Process your transactions and send related information, including purchase confirmations and
                  invoices.
               </li>
               <li>Post your job listings and manage your applications.</li>
               <li>Respond to your comments, questions, and requests.</li>
               <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
               <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
            </ul>

            <h2 className={`text-3xl font-semibold mt-6`}>3. Disclosure of Your Information</h2>
            <p className={`mt-4`}>We may share information we have collected about you in certain situations. Your information may be
               disclosed as follows:</p>
            <ul>
               <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is
                  necessary to respond to legal process, to investigate or remedy potential violations of our policies,
                  or to protect the rights, property, and safety of others, we may share your information as permitted
                  or required by any applicable law, rule, or regulation.
               </li>
               <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or
                  during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a
                  portion of our business to another company.
               </li>
               <li><strong>Affiliates:</strong> We may share your information with our affiliates, in which case we will
                  require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any
                  subsidiaries, joint venture partners, or other companies that we control or that are under common
                  control with us.
               </li>
            </ul>

            <h2 className={`text-3xl font-semibold mt-6`}>4. Security of Your Information</h2>
            <p className={`mt-4`}>We use administrative, technical, and physical security measures to help protect your personal
               information. While we have taken reasonable steps to secure the personal information you provide to us,
               please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method
               of data transmission can be guaranteed against any interception or other type of misuse.</p>

            <h2 className={`text-3xl font-semibold mt-6`}>5. Policy for Children</h2>
            <p className={`mt-4`}>We do not knowingly solicit information from or market to children under the age of 13. If we learn that
               we have collected personal information from a child under age 13 without verification of parental
               consent, we will delete that information as quickly as possible.</p>

            <h2 className={`text-3xl font-semibold mt-6`}>6. Your Rights</h2>
            <p className={`mt-4`}>You have the right to access, correct, update, or delete your personal information. You can do so by
               contacting us using the information provided below.</p>

            <h2 className={`text-3xl font-semibold mt-6`}>7. Contact Us</h2>
            <p className={`mt-4`}>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p className={`mt-4`}><strong>Email:</strong> <Link className={`link link-hover text-green-600`} href={`mailto:${LINKS.supportEmail}`}>{LINKS.supportEmail}</Link></p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> {COMPANY_DETAILS.streetAddress}, {COMPANY_DETAILS.city}, {COMPANY_DETAILS.zipCode}, {COMPANY_DETAILS.country}</p>
         </div>
      </div>
   );
};

export default Page;