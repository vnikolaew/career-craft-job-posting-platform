import React from "react";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";
import LoadingButton from "@/components/common/LoadingButton";
import { MY_CVS_QUERY } from "@/app/my-files/_components/tabs/MyCoverLettersTab";

export interface DeleteAllCVsModalProps {
   id: string;
}

const DELETE_ALL_CVS_MUTATION = gql(/* GraphQL */`
    mutation DeleteAllCvs {
        deleteAllCoverLetterTemplates
    }

`);

const DeleteAllCVsModal = ({ id }: DeleteAllCVsModalProps) => {
   const [deleteCvs, { loading, data, error }] = useMutation(DELETE_ALL_CVS_MUTATION, {
      refetchQueries: [MY_CVS_QUERY]
   });

   return (
      <dialog id={id} className="modal">
         <form method="dialog" className="modal-backdrop">
            <button>close</button>
         </form>
         <div className="modal-box">
            <h3 className="font-bold text-xl">
               Delete all cover letters
            </h3>
            <p className="py-4">
               Are you sure you want to delete all templates? In case you want to delete only this template, use the
               "Delete" function instead of "Delete all".
            </p>
            <div className="modal-action">
               <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn !shadow-md btn-lg">Close</button>
               </form>
               <LoadingButton
                  className={`btn btn-lg btn-primary !text-white !rounded-lg !ml-4 !shadow-md`}
                  onClick={async _ => {
                     let res = await deleteCvs();
                     if(res.data?.deleteAllCoverLetterTemplates) {
                        document.getElementById(id)?.close();
                     }
                  }}
                  loadingText={`Deleting ...`} loading={loading}>
                  Confirm
               </LoadingButton>
            </div>
         </div>
      </dialog>
   );
};

export default DeleteAllCVsModal;