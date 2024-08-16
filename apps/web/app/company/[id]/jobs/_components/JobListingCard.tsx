"use client";
import React, { Fragment, useEffect, useMemo } from "react";
import { GetCompanyWithListingsQueryQuery, JobListing } from "@/__generated__/graphql";
import { Bookmark } from "lucide-react";
import moment from "moment";
import { gql } from "@/__generated__";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { GET_COMPANY_LISTINGS_QUERY } from "@/app/company/[id]/_queries";
import { ME_QUERY } from "@/components/Navbar";
import LoadingButton from "@/components/common/LoadingButton";

export interface JobListingCardProps {
   listing: Partial<JobListing>;
}

const UNSAVE_JOB_LISTING_MUTATION = gql(/* GraphQL */`
    mutation UnSaveJobListing($jobListingId: String!) {
        unSaveJobListing(listingId: $jobListingId)
    }
`);

const SAVE_JOB_LISTING_MUTATION = gql(/* GraphQL */`
    mutation SaveJobListing($jobListingId: String!) {
        saveJobListing(listingId: $jobListingId) {
            id
            listingId
            userId
            metadata
            createdAt
        }
    }
`);

const JobListingCard = ({ listing }: JobListingCardProps) => {
   const listingCreatedAtDisplayValue = useMemo(() => {
      let isValid = moment(listing.createdAt).isValid();
      let date;
      if (!isValid) {
         date = moment().subtract(1, `d`).toDate();
      } else date = moment(listing.createdAt).toDate();

      return moment(date).isSame(moment().subtract(1, `days`), `day`) ? `Yesterday` : moment(date).format(`DD.MM.YY`);
   }, [listing.createdAt]);

   const { data: me } = useQuery(ME_QUERY, { fetchPolicy: `cache-only` });
   const [saveJobListing, { loading: saving }] = useMutation(SAVE_JOB_LISTING_MUTATION, { variables: { jobListingId: listing.id! } });
   const [unSaveJobListing, { loading: unsaving }] = useMutation(UNSAVE_JOB_LISTING_MUTATION, { variables: { jobListingId: listing.id! } });

   const isSaved = useMemo(() =>
         me?.me?.saved_listings?.some(l => l?.listingId === listing.id),
      [me?.me?.saved_listings, listing.id]);

   async function handleSaveJobListing() {
      await saveJobListing({
         onCompleted: data => console.log({ data })
      })
   }

   async function handleUnSaveJobListing() {
      await unSaveJobListing({
         onCompleted: data => console.log({ data })
      })
   }

   return (
      <div className={`w-full flex flex-col items-start gap-4 mt-4 bg-neutral-100 shadow-md p-4 rounded-md`}>
         <div className={`w-2/3 flex items-center justify-between`}>
            <time>{listingCreatedAtDisplayValue}</time>
            <div data-tip={isSaved ? `Unsave` : `Save`} className={`tooltip`}>
               <LoadingButton
                  loadingText={``}
                  loading={saving || unsaving}
                  onClick={async _ => {
                     if (isSaved) await handleUnSaveJobListing();
                     else await handleSaveJobListing();
                  }}
                  className={`btn-circle  btn-outline !bg-neutral-300 !border-none`}>
                  <Bookmark className={`!fill-neutral-500 !text-neutral-500 !bg-neutral-500`} size={20} />
               </LoadingButton>
            </div>
         </div>
         <h2 className={`text-2xl font-semibold`}>{listing.name}</h2>
         <h3 className={``}>{listing.location}</h3>
         <p dangerouslySetInnerHTML={{ __html: listing.description_raw ?? `` }} />
      </div>
   );
};

export const JobListingsList = ({ company }: { company: GetCompanyWithListingsQueryQuery["getCompany"] }) => {
   const client = useApolloClient();
   const { data: me } = useQuery(ME_QUERY, { fetchPolicy: `cache-only` });

   useEffect(() => {
      if (me?.me) {
         console.log({ company });
         client.writeQuery({
            query: GET_COMPANY_LISTINGS_QUERY,
            variables: { id: company!.id },
            data: { getCompany: company },
         });
      }
   }, [me?.me]);

   return (
      <Fragment>
         {company!.listings?.map((listing) => <JobListingCard key={listing.id} listing={listing} />)}
      </Fragment>
   );
};

export default JobListingCard;