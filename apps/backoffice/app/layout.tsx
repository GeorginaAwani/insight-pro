"use client"
import "../styles/globals.css"
import { bodyFont } from "@repo/ui/fonts"
import { ClerkProvider } from "@clerk/nextjs"
import { ENV } from "../lib/constants"
import { ToastProvider } from "@repo/shared/contexts"
import { Toast } from "@repo/ui/components"

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <ClerkProvider publishableKey={ENV.clerkPublishableKey}>
      <ToastProvider>
        <html lang="en" className={`${bodyFont.variable} font-body`}>
          <head>
            <link rel="icon" href="/images/favicon.svg" sizes="any" />
            <link rel="shortcut icon" href="/images/favicon.svg" sizes="any" />
            <title>Insite</title>
          </head>
          <body className="bg-neutral-100">
            {children}

            <div
              aria-live="assertive"
              className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50">
              <Toast />
            </div>
          </body>
        </html>
      </ToastProvider>
    </ClerkProvider>
  )
}
