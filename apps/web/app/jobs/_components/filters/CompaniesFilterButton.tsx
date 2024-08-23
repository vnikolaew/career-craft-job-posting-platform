"use client";
import React from "react";
import JobFilterButton from "./JobFilterButton";
import { ButtonText } from "./JobFiltersSection";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { cn } from "@/lib/utils";
import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";
import { Search } from "lucide-react";
import List from "@/components/common/List";
import Skeleton from "@/components/common/Skeleton";

export interface CompaniesFilterButtonProps {
   companies?: string[];
}

const CompaniesFilterButton = ({ companies }: CompaniesFilterButtonProps) => {
   const { data, loading } = useQuery(GET_ALL_COMPANIES_QUERY, { fetchPolicy: `cache-only` });

   console.log({ companies });
   return (
      <JobFilterButton modal={id => <CompaniesFilterModal id={id} />} active={!!companies?.length}>
         Companies<ButtonText
         values={companies?.map(id => data?.companies?.find(c => c.id === id || c.name === id)?.name).filter(Boolean) as string[]} />
      </JobFilterButton>
   );
};

const GET_ALL_COMPANIES_QUERY = gql(/* GraphQL */`
    query GetAllCompaniesQuery {
        companies(orderBy: {listings: {_count: desc}}) {
            id
            name
            email
            brand_image_url
            _count {
                listings
            }
        }
    }
`);


const CompaniesFilterModal = ({ id }: { id: string }) => {
   const [selectedCompanies, setSelectedCompanies] = useQueryState(`companies`, parseAsArrayOf(parseAsString));
   const { data, loading } = useQuery(GET_ALL_COMPANIES_QUERY, {
      variables: {},
   });

   async function handleClickCategory(category: string) {
      let company = data?.companies.find(c => c.name === category);
      if (!company) return;

      if (selectedCompanies?.includes(company.id.trim())) await setSelectedCompanies(c => c?.filter(_ => _ !== company.id.trim()) ?? []);
      else await setSelectedCompanies(c => [...(c ?? []), company.id]);
   }

   return (
      <dialog id={id} className="modal">
         <div className="modal-box min-w-[]">
            <button onClick={_ => setSelectedCompanies(null!)}
                    className="btn btn-ghost absolute right-2 top-4 text-lg !text-green-600 hover:!bg-green-200 !px-8 !py-2 !rounded-full">
               Clear
            </button>
            <h3 className="font-bold text-xl">
               Companies
            </h3>
            <div className="py-4 w-full mt-4">
               <label
                  className="input input-bordered w-full flex items-center gap-2 input-accent flex-wrap !h-fit !py-2 ">
                  <Search size={18} />
                  {selectedCompanies?.map((company, index) => (
                     <div key={company} className="badge badge-ghost inline-flex gap-2 items-center text-nowrap ">
                           <span>
                              {data?.companies?.find(c => c.id === company)?.name}
                           </span>
                        <span
                           onClick={_ => setSelectedCompanies(c => c?.filter(x => x !== company) ?? [])}
                           className={`text-xs cursor-pointer`}>
                              X
                           </span>
                     </div>
                  ))}
                  <input type="text" className="grow" placeholder="Search for a company" />
               </label>
            </div>
            {loading && (
               <div className={`flex flex-wrap items-center mt-4 gap-2`}>
                  <List count={10} render={(id) => <Skeleton key={id} className={`w-24 h-6 rounded-full`} />} />
               </div>
            )}
            <div className={`flex flex-wrap items-center mt-4 gap-3 max-h-[400px] overflow-y-scroll`}>
               {data?.companies
                  .toSorted((a, b) => (b._count?.listings ?? 0) - (a._count?.listings ?? 0))
                  ?.map((company, i) => (
                     <button onClick={_ => handleClickCategory(company.name)} key={company.name}
                             className={cn(`btn rounded-full btn-ghost !bg-neutral-100 hover:!bg-neutral-200 !py-3`,
                                selectedCompanies?.includes(company.id) && `!bg-green-100 !text-green-600 hover:!bg-green-300`)}>
                     <span className={cn(`text-neutral-400`,
                        selectedCompanies?.includes(company.id) && `!text-green-600`)}>{company._count?.listings ?? 0}</span>
                        {company.name}
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
export default CompaniesFilterButton;
;