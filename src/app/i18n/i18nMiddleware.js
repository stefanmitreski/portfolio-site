import { createMiddleware } from "next-intl/server";

export default createMiddleware({
  locales: ["en", "mk"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
