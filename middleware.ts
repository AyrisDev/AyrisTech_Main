import createIntlMiddleware from 'next-intl/middleware';
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const intlMiddleware = createIntlMiddleware({
  locales: ['tr', 'en'],
  defaultLocale: 'tr'
});

export function middleware(request: NextRequest) {
  // Skip internationalization for studio routes
  if (request.nextUrl.pathname.startsWith('/studio')) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-is-studio", "true");
    
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  // Apply internationalization middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
