import React from "react";
import { JobFilterButton } from "@/app/jobs/_components/filters/index";
import { useQuery } from "@apollo/client";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { Search } from "lucide-react";
import List from "@/components/common/List";
import Skeleton from "@/components/common/Skeleton";
import { cn } from "@/lib/utils";
import { ButtonText } from "@/app/jobs/_components/filters/JobFiltersSection";
import { gql } from "@/__generated__";

export interface LocationsFilterButtonProps {
   locations?: string[];
}

const LocationsFilterButton = ({ locations }: LocationsFilterButtonProps) => {
   return (
      <JobFilterButton modal={id => <LocationsFilterModal id={id} />} active={!!locations?.length}>
         Locations<ButtonText values={locations} />
      </JobFilterButton>
   );
};

const GET_ALL_LOCATIONS_QUERY = gql(/* GraphQL */`
    query GetAllLocationsQuery {
        getAllLocations {
            name
            totalJobsCount
        }
    }
`);

const LocationsFilterModal = ({ id }: { id: string }) => {
   const { data, loading } = useQuery(GET_ALL_LOCATIONS_QUERY, {
      variables: {},
   });

   const [selectedLocations, setSelectedLocations] = useQueryState(`locations`, parseAsArrayOf(parseAsString));

   async function handleClickCategory(location: string) {
      if (selectedLocations?.includes(location.trim())) await setSelectedLocations(c => c?.filter(_ => _ !== location.trim()) ?? []);
      else await setSelectedLocations(c => [...(c ?? []), location.trim()]);
   }

   return (
      <dialog id={id} className="modal">
         <div className="modal-box min-w-[600px]">
            <button onClick={_ => setSelectedLocations(null!)}
                    className="btn btn-ghost absolute right-2 top-4 text-lg !text-green-600 hover:!bg-green-200 !px-8 !py-2 !rounded-full">
               Clear
            </button>
            <h3 className="font-bold text-xl">
               Locations
            </h3>
            <div className="py-4 w-full mt-4">
               <label className="input input-bordered w-full flex items-center gap-2 input-accent ">
                  <Search size={18} />
                  <input type="text" className="grow" placeholder="Search for a category" />
               </label>
            </div>
            {loading && (
               <div className={`flex flex-wrap items-center mt-4 gap-2`}>
                  <List count={10} render={(id) => <Skeleton key={id} className={`w-24 h-6 rounded-full`} />} />
               </div>
            )}
            <div className={`flex flex-wrap items-center mt-4 gap-3 max-h-[400px] overflow-y-scroll`}>
               {data?.getAllLocations
                  ?.filter(c => c.totalJobsCount !== 0)
                  ?.map((location) => (
                     <button onClick={_ => handleClickCategory(location.name)} key={location.name}
                             className={cn(`btn rounded-full btn-ghost !bg-neutral-100 hover:!bg-neutral-200 !py-3`,
                                selectedLocations?.includes(location.name) && `!bg-green-100 !text-green-600 hover:!bg-green-300`)}>
                     <span className={cn(`text-neutral-400`,
                        selectedLocations?.includes(location.name) && `!text-green-600`)}>{location.totalJobsCount}</span>
                        {location.name}
                     </button>
                  ))}
            </div>
            <div className="modal-action">
               <form method="dialog">
                  <button onClick={_ => {
                     window.location.reload();
                  }}
                          className="btn !bg-green-600 !text-white !px-6 !py-3 text-lg rounded-full !shadow-md hover:!shadow-lg transition-shadow duration-200">Save
                  </button>
               </form>
            </div>
         </div>
         <form method="dialog" className="modal-backdrop">
            <button>close</button>
         </form>
      </dialog>
   );
};

export default LocationsFilterButton;