"use client";
import { AnimatePresence, motion } from "framer-motion";
import useWindowScroll from "@/hooks/useWindowScroll";
import { ChevronUp } from "lucide-react";
import { useMemo } from "react";

export interface ScrollToTopButtonProps {
}

/**
 * A reusable Scroll to Top button.
 * @constructor
 */
const ScrollToTopButton = ({}: ScrollToTopButtonProps) => {
   const { y } = useWindowScroll();
   const showButton = useMemo(() => y >= 100, [y]);

   const scrollToTop = () => {
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
      window.focus();
      document.body.scrollTop = 0;
   };

   return (
      <AnimatePresence>
         {showButton && (
            <motion.div
               key={`scroll-to-top`}
               transition={{ duration: 0.3 }}
               initial={{
                  opacity: 100,
               }}
               className={`!z-[100] rounded-full`}
               animate={{ opacity: 100 }}
               exit={{ opacity: 0 }}
            >
               <div className={`tooltip tooltip-top fixed border-8 right-8 !z-[100] !h-fit opacity-70 rounded-full`} data-tip={`Scroll to top`}>
                  <button
                     onClick={scrollToTop}
                     className={`btn btn-circle !rounded-full !bg-secondary-bg !p-2 !text-main opacity-70`}
                  >
                     <ChevronUp size={28} />
                  </button>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default ScrollToTopButton;
