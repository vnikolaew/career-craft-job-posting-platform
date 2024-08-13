import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function isValidUrl(url: string) {
   try {
      new URL(url);
      return true;
   } catch (_) {
      return false;
   }
}

export const cn = (...inputs: ClassValue[]) => {
   return twMerge(clsx(inputs))
}