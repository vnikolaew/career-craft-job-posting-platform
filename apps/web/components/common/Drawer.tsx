"use client";
import React, {
   ComponentProps,
   Dispatch,
   Fragment,
   PropsWithChildren,
   SetStateAction,
   useRef,
   useState,
} from "react";
import { cn } from "@/lib/utils";
import { useOnClickOutside } from "usehooks-ts";
import { AnimatePresence, motion, MotionProps } from "framer-motion";

export interface DrawerProps extends PropsWithChildren {
}

export const DrawerContext = React.createContext({
   open: false,
   setOpen: (() => true) as Dispatch<SetStateAction<boolean>>,
});
export const useDrawerContext = () => React.useContext(DrawerContext);

const DrawerContextProvider = ({ children }: PropsWithChildren) => {
   const [open, setOpen] = useState(false);

   return (
      <DrawerContext.Provider value={{ open, setOpen }}>
         {children}
      </DrawerContext.Provider>
   );
};

const DrawerContent = ({ children, className, ...props }: PropsWithChildren & ComponentProps<'div'> & MotionProps) => {
   const context = useDrawerContext();
   if (!context) throw new Error(`useDrawer must be used within a DrawerProvider`);
   let drawerRef = useRef<HTMLDivElement>(null!)

   useOnClickOutside(drawerRef, _ => context.setOpen(false));

   return (
      <AnimatePresence>
         {context.open && (
            <Fragment>
               <div className={`fixed top-0 left-0 bg-neutral-900/50 w-full h-full z-[1000]`} />
               <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 100, width: `auto` }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: .3, ease: `easeInOut` }}
                  key={`drawer`}
                  ref={drawerRef}
                  className={cn(`fixed top-0 right-0 h-full bg-neutral-100 !z-[10000]`, className)}
                  {...props}
               >
                  {children}
               </motion.div>
            </Fragment>
         )}
      </AnimatePresence>
   );
};

const DrawerTrigger = ({ children }: PropsWithChildren) => {
   const context = useDrawerContext();
   if (!context) throw new Error(`useDrawer must be used within a DrawerProvider`);

   return (
      <div onClick={_ => {
         if (context.open) context.setOpen(false);
         else context.setOpen(!context.open);
      }}>
         {children}
      </div>
   );
};

const Drawer = ({}: DrawerProps) => {
   return <Fragment />;
};

Drawer.Trigger = DrawerTrigger;
Drawer.Content = DrawerContent;
Drawer.Provider = DrawerContextProvider;

export default Drawer;