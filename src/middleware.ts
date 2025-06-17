import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
  pages: { signIn: "/signin" },
});

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|robots.txt|sitemap.xml|signin).*)"],
};
