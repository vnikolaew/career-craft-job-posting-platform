import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
   const url = request.nextUrl.toString(); // Get the current pathname
   const reqHeaders = new Headers(request.headers);

   reqHeaders.set(`next-url`, url.trim());
   request.headers.set(`next-url`, url.trim());

   return NextResponse.next({ request: { headers: reqHeaders } });
}

export const config = {
   matcher: "/:path*", // Apply middleware to all paths
};
