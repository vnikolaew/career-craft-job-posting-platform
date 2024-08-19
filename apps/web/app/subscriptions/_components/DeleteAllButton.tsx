"use client";
import React, { Fragment } from "react";
import { EllipsisVertical, Trash } from "lucide-react";
import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";

export interface DeleteAllButtonProps {
}

const DELETE_ALL_SUBSCRIPTIONS_MUTATION = gql(/* GraphQL */`
    mutation DeleteAllSubscriptions {
        deleteAllSubscriptions {
            deleted_count
            success
        }
    }
`);

const DeleteAllButton = ({}: DeleteAllButtonProps) => {
   const [deleteAllSubscriptions, { loading }] = useMutation(DELETE_ALL_SUBSCRIPTIONS_MUTATION, {
      variables: {},
   });

   async function handleDeleteAllSubscriptions() {
      await deleteAllSubscriptions({
         onCompleted: ({ deleteAllSubscriptions: { success } }) => {
            if (success) window.location.reload();
         },
      });
   }

   return (
      <Fragment>
         <dialog className={`modal`} id={`delete-all`}>
            <form method="dialog" className="modal-backdrop">
               <button>close</button>
            </form>
            <div className="modal-box !bg-neutral-100">
               <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
               </form>
               <h3 className="font-bold text-lg">
                  Delete all
               </h3>
               <p className="py-4">
                  Are you sure you want to delete all subscriptions? In case you want to delete only a specific
                  subscription,
                  use the <b>"Delete"</b> function instead of <b>"Delete all"</b>.
               </p>
               <div className="modal-action">
                  <form method="dialog">
                     <button
                        className="btn !bg-transparent !text-red-600 rounded-full !px-12 !border-none hover:!bg-red-200 transition-colors duration-200 !shadow-none !text-lg">
                        Decline
                     </button>
                  </form>
                  <form method="dialog">
                     <button onClick={handleDeleteAllSubscriptions}
                             className="btn !bg-transparent !text-green-600 rounded-full !px-12 !border-none hover:!bg-green-200 transition-colors duration-200 !shadow-none !text-lg">
                        Confirm
                     </button>
                  </form>
               </div>
            </div>
         </dialog>
         <div className="dropdown dropdown-bottom ">
            <div onClick={e => {
            }} role={`button`} tabIndex={0} className="m-1 ">
               <button className={`btn btn-circle !bg-transparent !border-none`}>
                  <EllipsisVertical className={`text-neutral-500`} />
               </button>
            </div>
            <ul tabIndex={0} className="menu dropdown-content bg-neutral-100 rounded-box z-[1] w-52 p-2 shadow">
               <li onClick={e => {
                  document.getElementById(`delete-all`)?.showModal();
               }} role={"button"} className={``}>
                  <div
                     className={`py-2 text-lg cursor-pointer w-full hover:!bg-neutral-200 rounded-md transition-colors duration-200 inline-flex items-center gap-2`}>
                     <Trash className={`text-red-700`} size={18} />
                     Delete all
                  </div>
               </li>
            </ul>
         </div>
      </Fragment>
   );
};

export default DeleteAllButton;