"use client";
import React, { Fragment, useEffect, useMemo } from "react";
import { GetCompanyWithListingsQueryQuery } from "@/__generated__/graphql";
import { Bookmark } from "lucide-react";
import moment from "moment";
import { gql } from "@/__generated__";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { ME_QUERY } from "@/components/Navbar";
import LoadingButton from "@/components/common/LoadingButton";
import { GET_COMPANY_LISTINGS_QUERY } from "@/app/company/[id]/_queries/graphql";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { DEFAULT_COMPANY_LOGO_URL } from "@/providers/apollo/ApolloProvider";
import { useMeQuery } from "@/hooks/useMeId";
import { pascalToSpaces } from "@/app/jobs/_components/filters/EmploymentTypeFilterButton";

export interface JobListingCardProps {
   listing: GetCompanyWithListingsQueryQuery["getCompany"]["listings"][number]
}

export const UNSAVE_JOB_LISTING_MUTATION = gql(/* GraphQL */`
    mutation UnSaveJobListing($jobListingId: String!) {
        unSaveJobListing(listingId: $jobListingId)
    }
`);

export const SAVE_JOB_LISTING_MUTATION = gql(/* GraphQL */`
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

   const me = useMeQuery();
   const [saveJobListing, { loading: saving }] = useMutation(SAVE_JOB_LISTING_MUTATION, { variables: { jobListingId: listing.id! } });
   const [unSaveJobListing, { loading: unsaving }] = useMutation(UNSAVE_JOB_LISTING_MUTATION, { variables: { jobListingId: listing.id! } });

   const description = useMemo(() => {
      let description = ``;
      if (listing.parametersTyped?.salary) {
         if (listing.parametersTyped.salary.__typename === `RangeJobListingSalary`) {
            description += ` Salary <b>from ${listing.parametersTyped.salary.from} to ${listing.parametersTyped.salary.to} ${listing.parametersTyped.salary.currency}</b>;`;
         } else {
            description += ` Salary: <b> ${listing.parametersTyped.salary.value} ${listing.parametersTyped.salary.currency}</b>;`;
         }
      }
      if (listing.parametersTyped?.furlough) description += ` Furlough: <b> ${listing.parametersTyped.furlough}</b>;`;
      if (listing.parametersTyped?.remoteInterview) description += ` <b>Remote interview</b>;`;
      if (listing.parametersTyped?.from) description += ` <b>From ${pascalToSpaces(listing.parametersTyped.from)}</b>;`;
      if (listing.level) description += ` <b>Level: ${listing.level}</b>;`;

      return description.trim().endsWith(`;`) ? description.trim().slice(0, -1) : description;
   }, [listing]);

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
      <div className={`w-full flex flex-col items-start gap-4 mt-4 bg-neutral-100 shadow-md p-4 rounded-lg`}>
         <div className={`w-full px-2 flex items-center gap-8 transition-transform duration-200`}>
            <Link title={listing.name} href={`/job/${listing.id}`} className={`w-3/5 flex flex-col items-start gap-2`}>
               <div className={`w-full flex items-center justify-between`}>
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
                           size={18} />
                     </LoadingButton>
                  </div>
               </div>
               <h2 className={`text-2xl font-semibold`}>{listing.name}</h2>
               <h3 className={``}>{listing.location}</h3>
               <p dangerouslySetInnerHTML={{ __html: description }} />
            </Link>
            <div className={`w-[2px] !h-full !min-h-32 border-[1px] border-dashed border-neutral-300`} />
            <div className={`flex-1 flex items-start justify-start`}>
               <Image className={`rounded-md`} height={100} width={100} src={DEFAULT_COMPANY_LOGO_URL}
                      alt={listing.name!} />
            </div>
         </div>
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