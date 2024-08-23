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

export function sleep(ms: number) {
   return new Promise(resolve => setTimeout(resolve, ms));
}

export function getRandomItems<T>(array: T[], n: number): T[] {
   // Shuffle the array using Fisher-Yates algorithm
   let shuffledArray = [...array];
   for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j]!, shuffledArray[i]!];
   }

   // Return the first n elements of the shuffled array
   return shuffledArray.slice(0, n);
}

