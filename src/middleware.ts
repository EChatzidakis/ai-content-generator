import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";

// export default withAuth(
//   function middleware(req: NextRequest) {
//     console.log("Middleware");
//     console.log(req.url);
//     // Redirect unauthenticated users to /signin
//     if (!req.cookies) {
//       return NextResponse.redirect("/signin");
//     }
//     return NextResponse.next();
//   },
//   {
//     pages: {
//       signIn: "/signin",
//     },
//   }
// );
export const middleware =  withAuth(
  function middleware(req) {
    if (!req.nextauth.token) {
      return NextResponse.redirect("/signin"); // Redirect if not authenticated
    }
    return NextResponse.next(); // Allow the request if authenticated
  },
  {
    pages: {
      signIn: "/signin", // Redirect if not authenticated
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}