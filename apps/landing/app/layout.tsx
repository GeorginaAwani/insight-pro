import { Metadata } from "next"
import "../styles/globals.css"
import { bodyFont } from "@repo/ui/fonts"

export const metadata: Metadata = {
  title: "Landing",
  description: "landing"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en" className={`${bodyFont.variable} font-body`}>
      <body className="bg-[--bg-white]">{children}</body>
    </html>
  )
}
