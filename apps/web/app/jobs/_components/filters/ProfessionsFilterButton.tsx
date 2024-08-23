import React from "react";
import JobFilterButton from "@/app/jobs/_components/filters/JobFilterButton";
import { ButtonText } from "@/app/jobs/_components/filters/JobFiltersSection";
import { useQuery } from "@apollo/client";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { gql } from "@/__generated__";
import { Search } from "lucide-react";
import List from "@/components/common/List";
import Skeleton from "@/components/common/Skeleton";
import { cn } from "@/lib/utils";

export interface ProfessionsFilterButtonProps {
   professions?: string[];
}

const ProfessionsFilterButton = ({professions}: ProfessionsFilterButtonProps) => {
   return (
      <JobFilterButton modal={id => <ProfessionsFilterModal id={id} />} active={!!professions?.length}>
         Professions<ButtonText values={professions} />
      </JobFilterButton>
   );
};

const GET_ALL_JOB_CATEGORIES_QUERY = gql(/* GraphQL */`
    query GetAllJobCategoriesQuery {
        jobListingCategories {
            id
            name
            description
            _count {
                listings
            }
        }
    }
`);

const ProfessionsFilterModal = ({ id }: { id: string }) => {
   const { data, loading } = useQuery(GET_ALL_JOB_CATEGORIES_QUERY, {
      variables: {},
   });
   const [selectedProfessions, setSelectedProfessions] = useQueryState(`professions`, parseAsArrayOf(parseAsString));

   async function handleClickCategory(category: string) {
      if (selectedProfessions?.includes(category.trim())) await setSelectedProfessions(c => c?.filter(_ => _ !== category.trim()) ?? []);
      else await setSelectedProfessions(c => [...(c ?? []), category.trim()]);
   }


   return (
      <dialog id={id} className="modal">
         <div className="modal-box min-w-[600px]">
            <button onClick={_ => setSelectedProfessions(null!)} className="btn btn-ghost absolute right-2 top-4 text-lg !text-green-600 hover:!bg-green-200 !px-8 !py-2 !rounded-full">
               Clear
            </button>
            <h3 className="font-bold text-xl">
               Professions
            </h3>
            <div className="py-4 w-full">
               <label className="input input-bordered w-full flex items-center gap-2 input-accent ">
                  <Search size={18} />
                  <input type="text" className="grow" placeholder="Search for a profession" />
               </label>
            </div>
            {loading && (
               <div className={`flex flex-wrap items-center mt-4 gap-2`}>
                  <List count={10} render={() => <Skeleton className={`w-16 h-6 rounded-full`} />} />
               </div>
            )}
            <div className={`flex flex-wrap items-center mt-4 gap-3 max-h-[400px] overflow-y-scroll`}>
               {data?.jobListingCategories
                  .toSorted((a, b) => b._count?.listings ?? 0 - (a._count?.listings ?? 0))
                  .toSorted((a, b) => a.name.localeCompare(b.name))
                  ?.map((category) => (
                     <button onClick={_ => handleClickCategory(category.name)} key={category.id}
                             className={cn(`btn rounded-full btn-ghost !bg-neutral-100 hover:!bg-neutral-200 !py-3`,
                                selectedProfessions?.includes(category.name) && `!bg-green-100 !text-green-600 hover:!bg-green-300`)}>
                     <span className={cn(`text-neutral-400`,
                        selectedProfessions?.includes(category.name) && `!text-green-600`)}>{category._count.listings ?? 0}</span>
                        {category.name}
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

export default ProfessionsFilterButton;