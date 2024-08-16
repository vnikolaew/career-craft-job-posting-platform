import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function isValidUrl(url: string) {
   try {
      new URL(url);
      return true;
   } catch (_) {
      return false;
   }
}

export const cn = (...inputs: ClassValue[]) => {
   return twMerge(clsx(inputs));
};

/**
 * Checks if a date is valid
 * @param year The year
 * @param month The month
 * @param day The day
 */
function isValidDate(year: number, month: number, day: number) {
   // Create a Date object
   var date = new Date(year, month - 1, day); // month is 0-based

   // Check if the date components are consistent after creation
   return date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day;
}
