import type { Metadata } from "next"
import "../styles/globals.css"
import { bodyFont } from "@repo/ui/fonts"

export const metadata: Metadata = {
  title: "Newsletter App",
  description: "Member Newsletter"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en" className={`${bodyFont.variable} font-body`}>
      <body>{children}</body>
    </html>
  )
}
