import React from "react";
import moment from "moment";
import { APP_NAME } from "@/config/site";
import Link from "next/link";

export interface PageProps {
}

const Page = ({}: PageProps) => {
   return (
      <div className={`my-12 w-full mx-auto`}>
         <h2 className={`text-4xl font-semibold`}>
            About Us
         </h2>
         <p className={`text-neutral-500 mt-4`}>Last
            updated: <time>{moment(new Date(2024, 7, 11)).format(`MMMM Do YYYY`)}</time></p>
         <div className={`w-1/2 divider my-4`} />
         <div className={`text-lg w-3/4`}>
            <h2 className={`text-3xl font-semibold mt-6`}>Our Mission</h2>
            <p className={`mt-4`}>
               At {APP_NAME}, we believe that finding the right job should be a seamless and empowering experience. Our
               mission is to connect job seekers with their dream jobs and help employers find the perfect candidates to
               grow their businesses.
            </p>

            <h2 className={`text-3xl font-semibold mt-6`}>What We Offer</h2>
            <ul className={`list-disc flex flex-col items-start gap-2 mt-4 pl-4`}>
               <li>
                  <strong>
                     Comprehensive Job Listings:{` `}
                  </strong>
                  Browse thousands of job openings across various industries.
               </li>
               <li>
                  <strong>
                     Personalized Job Alerts:{` `}
                  </strong>
                  Receive notifications for jobs that match your skills and preferences.
               </li>
               <li>
                  <strong>
                     Easy Application Process:{` `}
                  </strong>
                  Apply to jobs with just a few clicks.
               </li>
               <li>
                  <strong>
                     Career Resources:{` `}
                  </strong>
                  Access tools and advice to advance your career.
               </li>
               <li>
                  <strong>
                     Company Insights:{` `}
                  </strong>
                   Learn about potential employers before applying.
               </li>
            </ul>

            <h2 className={`text-3xl font-semibold mt-6`}>Our Story</h2>
            <p className={`mt-4`}>
               {APP_NAME} was founded in 2023 with a vision to revolutionize the job search process. Frustrated with the
               challenges of finding the right job, our founders set out to create a platform that is user-friendly,
               efficient, and focused on matching the right talent with the right opportunities.
            </p>

            <p className={`mt-4`}>
               Since our launch, we have helped thousands of job seekers connect with employers across the globe, and we
               are just getting started. We are constantly innovating and improving our platform to better serve our
               users.
            </p>

            <h2 className={`text-3xl font-semibold mt-6`}>Join Us</h2>
            <p className={`mt-4`}>
               Whether you're a job seeker looking for your next opportunity or an employer searching for top talent,
               <Link className={`link font-semibold text-green-600 mx-1 !no-underline`} href={`/`}>{APP_NAME}</Link> is
               here to help. Join us
               today and be part of a growing community that
               is shaping the future of
               work.
            </p>
         </div>
      </div>
   );
};

export default Page;