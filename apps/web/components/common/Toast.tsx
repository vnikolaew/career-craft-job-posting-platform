"use client";
import React, { Dispatch, PropsWithChildren, SetStateAction, useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

export interface ToastProps extends PropsWithChildren {
   duration: number;
   id: string;
}

export type ToastInfo = { id: string; children: React.ReactNode };

export const ToastsContext = React.createContext<[ToastInfo[], Dispatch<SetStateAction<ToastInfo[]>>]>([[], () => []]);
export const useToasts = () => {
   let [toasts, setToasts] = React.useContext(ToastsContext);

   const showToast = (info: ToastInfo) => {
      setToasts(t => [...t, info]);
      return info;
   };

   const removeToast = (id: string) => {
      if (!toasts.some(x => x.id === id)) return false;

      setToasts(t => t.filter(x => x.id !== id));
      return true;
   };

   return { toasts, setToasts, removeToast, showToast };
};


const Toasts = () => {
   const { toasts } = useToasts();

   return (
      <div className={`toast toast-end`}>
         {toasts.map((toast) => (
            <Toast id={toast.id} key={toast.id} duration={3000}>{toast.children}</Toast>
         ))}
      </div>
   );
};

export const ToastsProvider = ({ children }: { children: React.ReactNode }) => {
   const [toasts, setToasts] = useState<ToastInfo[]>([]);

   return (
      <ToastsContext.Provider value={[toasts, setToasts]}>
         <Toasts />
         {children}
      </ToastsContext.Provider>
   );
};


const Toast = ({ children, duration = 3_000, id }: ToastProps) => {
   const [show, setShow] = useState(true);

   useEffect(() => {
      let timeout = setTimeout(() => setShow(false), duration);
      return () => clearTimeout(timeout);
   }, []);

   return (
      <AnimatePresence>
         {
            show && (
               <motion.div
                  key={`toast-${id}`}
                  initial={{ opacity: 0, translateX: `100%` }}
                  animate={{ opacity: 100, translateX: 0 }}
                  exit={{ opacity: 0, translateX: `100%` }}
                  transition={{ duration: .3, ease: `easeInOut` }}
                  className="alert alert-success !bg-green-600 !text-white !shadow-sm !text-lg !px-6 !py-4 !min-w-[300px] !bg-opacity-80 flex items-center gap-4">
                  <Check className={`text-white`} size={18} />
                  <span>
                     {children}
                  </span>
               </motion.div>
            )
         }
      </AnimatePresence>
   );
};

export default Toast;