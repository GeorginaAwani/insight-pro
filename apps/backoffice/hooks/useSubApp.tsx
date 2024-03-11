"use client"
import { usePathname } from "next/navigation"

export function useSubApp() {
  const pathname = usePathname()
  return {
    active: (path: string) => {
      const routeBase = pathname.split("/").slice(-1)[0]
      return routeBase ? path.includes(routeBase) : false
    }
  }
}
