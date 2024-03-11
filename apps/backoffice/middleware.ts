import { authMiddleware } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export default authMiddleware({
  publicRoutes: (req) =>
    !req.url.includes("/dashboard") && !req.url.includes("/onboard"),
  afterAuth(auth, req, evt) {
    // If the user tries to access  a private route while unauthenticated, redirect to auth screen
    if (!auth.userId && !auth.isPublicRoute) {
      const authUrl = new URL("/auth", req.url)
      return NextResponse.redirect(authUrl)
    }
    if (auth.userId) {
      // TODO: if hasn't completed onboarding redirect to onboard screen else redirect to dashboard
      // if(!completedOnboarding) {
      //  const onboardUrl = new URL("/onboard", req.url)
      //    return NextResponse.redirect(onboardUrl)
      //}
      // return NextResponse.redirect(onboardUrl)
      // }
      if (auth.isPublicRoute) {
        // If the user is authenticated and trying to access a public route, redirect to dashboard. This is used to protect auth routes after authentication
        const dashboardUrl = new URL("/dashboard/home", req.url)

        return NextResponse.redirect(dashboardUrl)
      } else {
        // If the user is authenticated and trying to access a private route, allow them
        return NextResponse.next()
      }
    }
  }
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
}
