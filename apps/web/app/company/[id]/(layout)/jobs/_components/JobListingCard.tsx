"use client";
import React, { Fragment, useEffect, useMemo } from "react";
import { GetCompanyWithListingsQueryQuery, JobListing } from "@/__generated__/graphql";
import { Bookmark } from "lucide-react";
import moment from "moment";
import { gql } from "@/__generated__";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { ME_QUERY } from "@/components/Navbar";
import LoadingButton from "@/components/common/LoadingButton";
import { GET_COMPANY_LISTINGS_QUERY } from "@/app/company/[id]/_queries/graphql";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
            listing_id
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
         me?.me?.saved_listings?.some(l => l?.listing_id === listing.id),
      [me?.me?.saved_listings, listing.id]);

   async function handleSaveJobListing() {
      await saveJobListing({
         onCompleted: (data) => console.log({ data }),
         refetchQueries: [ME_QUERY],
      });
   }

   async function handleUnSaveJobListing() {
      await unSaveJobListing({
         onCompleted: data => console.log({ data }),
         refetchQueries: [ME_QUERY],
      });
   }

   return (
      <div className={`w-full flex flex-col items-start gap-4 mt-4 bg-neutral-100 shadow-md p-4 rounded-md`}>
         <Link href={`/job/${listing.id}`} className={`w-full flex flex-col items-start gap-4`}>
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
                     className={cn(`btn-circle btn-outline !bg-transparent !border-none !px-0 hover:!bg-green-200 transition-colors duration-200`,
                        isSaved && `!bg-green-200 !text-green-600 !fill-green-600`)}>
                     <Bookmark
                        className={cn(`!text-neutral-500 !h-5 !w-5`, isSaved && `!fill-green-600 !border-green-600`)}
                        size={20} />
                  </LoadingButton>
               </div>
            </div>
            <h2 className={`text-2xl font-semibold`}>{listing.name}</h2>
            <h3 className={``}>{listing.location}; {listing.id}</h3>
            {/*<p dangerouslySetInnerHTML={{ __html: listing.description_raw ?? `` }} />*/}
         </Link>
      </div>
   );
};

export const JobListingsList = ({ company }: { company: GetCompanyWithListingsQueryQuery["getCompany"] }) => {
   const client = useApolloClient();
   const { data: me } = useQuery(ME_QUERY, { fetchPolicy: `cache-only` });

   useEffect(() => {
      if (me?.me) {
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