import { useQuery, useReactiveVar } from "@apollo/client";
import { meIdVar } from "@/providers/apollo/ApolloProvider";
import { ME_QUERY } from "@/components/Navbar";
import { useMemo } from "react";

export function useMeId() {
   const meId = useReactiveVar(meIdVar);
   return meId;
}

export function useMeQuery() {
   const { data: me } = useQuery(ME_QUERY, { fetchPolicy: `cache-only` });
   return me;
}

export function useIsJobListingSaved(jobListingId: string) {
   const { data: me } = useQuery(ME_QUERY, { fetchPolicy: `cache-only` });
   const isSaved = useMemo(() => {
      return me?.me?.saved_listings?.some(l => l?.listing_id === jobListingId) ?? false;
   }, [me?.me?.saved_listings, jobListingId]);

   return isSaved;
}
