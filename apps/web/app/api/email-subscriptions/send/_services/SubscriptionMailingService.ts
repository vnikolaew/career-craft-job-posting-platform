import { gql } from "@/__generated__";
import { client } from "@/providers/apollo/client";
import { EmailService, NewJobListingsEmail } from "@repo/emails";
import { headers } from "next/headers";
import { APP_NAME } from "@/config/site";

const GET_JOB_LISTINGS_QUERY = gql(/* GraphQL */`
    query GetJobListings($ids: [String!]) {
        jobListings(where: {id: {in: $ids}}) {
            id
            name
            categories {
                category_id
            }
            description_raw
            createdAt
            external_application_url
            keywords
            languages
            location
            level
            parameters
            type
            work_from
            company_id
            company {
                id
                name
                about_raw
                email
                brand_image_url
            }

        }
    }
`);

export class SubscriptionMailingService {
   private readonly hostname: string;

   constructor(private readonly emailService: EmailService) {
      this.hostname = headers().get(`origin`)!;
   }

   public async sendNewJobListingsToUser(subscriptionsId: string, listingIds: string[], userEmail: string) {
      // Fetch the listings.
      const { data } = await client.query({
         query: GET_JOB_LISTINGS_QUERY,
         variables: { ids: listingIds },
      });

      let { success } = await this.emailService.sendMail({
         to: userEmail,
         react: NewJobListingsEmail({
            subscriptionsId,
            email: userEmail,
            subscriptionsLink: `${this.hostname}/subscriptions`,
            seeAllSimilarLink: `${this.hostname}`,
            jobListings: data.jobListings?.map(({
                                                   id,
                                                   name,
                                                   description_raw,
                                                   createdAt,
                                                   location,
                                                   company: {
                                                      name: companyName,
                                                      id: companyId,
                                                      email,
                                                      about_raw,
                                                      brand_image_url,
                                                   },
                                                }) => ({
               name,
               id,
               description_raw,
               createdAt,
               location,
               company: { name: companyName, id: companyId, email, about_raw, image_url: brand_image_url },
            })) ?? [],
         }),
         subject: `Notification about new job listings via e-mail in ${APP_NAME}`,
      });

   }
}