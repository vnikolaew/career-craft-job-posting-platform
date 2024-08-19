import React from "react";
import { GetJobListingQuery } from "@/__generated__/graphql";
import ApplyForJobSection from "@/app/job/[id]/_components/ApplyForJobSection";

export interface JobListingLeftSectionProps {
   jobListing: NonNullable<GetJobListingQuery["getJobListing"]>;
}

const DEFAULT_DESCRIPTION_RAW = (email: string) => `
   <div class="flex flex-col gap-2 text-lg">
        <h1>Software Engineer</h1>
        <p><strong>Company:</strong> Innovative Tech Solutions Inc.</p>
        <p><strong>Location:</strong> San Francisco, CA</p>
        <p><strong>Type:</strong> Full-time</p>
        
        <div class="job-description">
            <h2 class="font-semibold my-2">Job Description</h2>
            <p>Innovative Tech Solutions Inc. is seeking a talented and enthusiastic Software Engineer to join our dynamic team. As a Software Engineer, you will be responsible for developing high-quality software solutions that meet the needs of our clients and contribute to our mission of technological advancement.</p>
        </div>
        
        <div class="responsibilities">
            <h2 class="font-semibold my-2">Responsibilities</h2>
            <ul>
                <li>Design, develop, and maintain software applications and systems.</li>
                <li>Write clean, scalable, and efficient code.</li>
                <li>Collaborate with cross-functional teams to define and prioritize project requirements.</li>
                <li>Participate in code reviews and provide constructive feedback.</li>
                <li>Troubleshoot, debug, and upgrade existing software.</li>
                <li>Stay up-to-date with emerging technologies and industry trends.</li>
            </ul>
        </div>
        
        <div class="qualifications">
            <h2 class="font-semibold my-2">Qualifications</h2>
            <ul>
                <li>Bachelor's degree in Computer Science, Engineering, or related field.</li>
                <li>Proven experience as a Software Engineer or similar role.</li>
                <li>Strong knowledge of programming languages such as Java, C++, Python, or JavaScript.</li>
                <li>Experience with front-end and back-end development.</li>
                <li>Familiarity with databases and web services.</li>
                <li>Excellent problem-solving skills and attention to detail.</li>
                <li>Ability to work independently and as part of a team.</li>
            </ul>
        </div>
        
        <div class="benefits">
            <h2 class="font-semibold my-2">Benefits</h2>
            <ul>
                <li>Competitive salary and performance bonuses.</li>
                <li>Comprehensive health insurance including dental and vision coverage.</li>
                <li>401(k) plan with company match.</li>
                <li>Generous paid time off and holiday schedule.</li>
                <li>Flexible work hours and remote work options.</li>
                <li>Opportunities for professional growth and development.</li>
                <li>Dynamic and inclusive work environment.</li>
            </ul>
        </div>
        
        <p>If you are passionate about software development and looking for an exciting opportunity to advance your career, we encourage you to apply today!</p>
        
        <p><strong>To apply, please send your resume and cover letter to <a href="mailto:${email}">${email}</a>.</strong></p>
    </p>
<p>`;

const JobListingLeftSection = ({ jobListing }: JobListingLeftSectionProps) => {
   return (
      <div className={`w-full flex flex-col items-start gap-4 bg-neutral-200 p-4`}>
         <h2 className={`w-full text-center text-3xl`}>
            {jobListing.name}
         </h2>
         <div className={`mt-4 `}
              dangerouslySetInnerHTML={{ __html: DEFAULT_DESCRIPTION_RAW(jobListing.company.email) }}>
         </div>
         <ApplyForJobSection jobListing={jobListing}/>
      </div>
   );
};

export default JobListingLeftSection;