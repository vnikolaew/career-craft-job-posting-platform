import { CookieAttributes } from "lucia";
import moment from "moment";

export function serializeCookie(name: string, value: string, cookie: CookieAttributes) {
   const serializedCookie = `${name}=${encodeURIComponent(value)}; Max-Age=${cookie.maxAge}; Domain=.career-craft.com; Expires=${moment().add(cookie.maxAge, `seconds`).format(`ddd, DD MMM YYYY HH:mm:ss [GMT]`)}; Path=${cookie.path!}; SameSite=${cookie.sameSite} ${cookie.httpOnly ? `;HttpOnly` : ``}`;
   return serializedCookie;
}