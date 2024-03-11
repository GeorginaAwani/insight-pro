"use client"
import React from "react"
import { cn } from "@repo/ui/ui-utils"
import Link from "next/link"
import {
  IconCalendar,
  IconChevronUp,
  IconCoinsHand,
  IconHomeSmile,
  IconLifeBuoy01,
  IconMessageTextSquare01,
  IconSettings01,
  IconUsers01,
  IconZap
} from "@repo/ui/ungrouped-icons"
import { useSubApp } from "../../hooks/useSubApp"
import { usePathname } from "next/navigation"
import { If } from "@repo/ui/components"

const HomeNavLinks = [
  { text: "Home", icon: IconHomeSmile, href: "/dashboard/home" },
  {
    text: "Audience",
    icon: IconUsers01,
    subLinks: [
      { text: "Contacts", href: "/dashboard/audience/contacts" },
      { text: "Lists", href: "/dashboard/audience/lists" }
    ]
  },
  { text: "Digests", icon: IconMessageTextSquare01, href: "/dashboard/digests" }
]
const ContentNavLinks = [
  { text: "Events", icon: IconCalendar, href: "/dashboard/events" },
  {
    text: "Giving",
    icon: IconCoinsHand,
    subLinks: [
      { text: "Offering", href: "/dashboard/giving/offerings" },
      { text: "Fundraisers", href: "/giving/fundraisers" }
    ]
  },
  { text: "Actions", icon: IconZap, href: "/dashboard/actions" }
]
const NavLinkGroups = [
  { title: "", links: HomeNavLinks },
  { title: "Content", links: ContentNavLinks }
]
const FooterLinks = [
  { text: "Support", icon: IconLifeBuoy01, href: "/dashboard/support" },
  { text: "Settings", icon: IconSettings01, href: "/dashboard//settings" }
]

const Aside = () => {
  const pathname = usePathname()
  const { active } = useSubApp()
  const [activeParent, setActiveParent] = React.useState(() => {
    return pathname?.includes("audience")
      ? "Audience"
      : pathname?.includes("giving")
        ? "Giving"
        : ""
  })

  return (
    <div className="bg-white h-full rounded-2xl w-[280px] min-h-full pt-6  flex flex-col justify-between overflow-auto hide-scroll-bar relative">
      <div className="pb-4">
        <div className="flex flex-col gap-6">
          {NavLinkGroups.map((linkGroup, idx) => {
            return (
              <nav
                className={cn("flex flex-col gap-2 px-4")}
                key={linkGroup.title + `${idx}`}>
                <If condition={!!linkGroup.title}>
                  <p
                    className={cn(
                      "font-body text-xs pl-3 font-medium text-neutral-500"
                    )}>
                    {linkGroup.title}
                  </p>
                </If>

                <div className="flex flex-col gap-2 z-20">
                  {linkGroup.links.map((link, idx) => {
                    if (link.href) {
                      return (
                        <Link
                          href={link.href}
                          key={link.href + `${idx}`}
                          className={cn(
                            "inline-flex px-3 py-2 items-center gap-3 text-neutral-600 font-body z-10 relative text-base font-semibold rounded-md",
                            {
                              "text-brand-600 bg-brand-50": active(link.href)
                            }
                          )}>
                          <link.icon
                            height={24}
                            width={24}
                            className={cn({
                              "text-brand-500": active(link.href)
                            })}
                          />

                          <span>{link.text}</span>
                        </Link>
                      )
                    } else if (link.subLinks) {
                      return (
                        <div key={link.text + `${idx}`} className="w-full">
                          <button
                            className={cn(
                              "inline-flex px-3 py-2 items-center justify-between text-neutral-600 font-body text-base font-semibold rounded-md w-full  z-10 relative bg-white"
                            )}
                            onClick={() => {
                              if (activeParent === link.text) {
                                setActiveParent("")
                              } else {
                                setActiveParent(link.text)
                              }
                            }}>
                            <span className="inline-flex gap-3">
                              <link.icon height={24} width={24} />
                              {link.text}
                            </span>

                            <IconChevronUp
                              height={20}
                              width={20}
                              className={cn("text-neutral-500 hidden", {
                                block: activeParent === link.text
                              })}
                            />
                          </button>
                          <If condition={activeParent === link.text}>
                            <div className="flex flex-col relative z-0">
                              {link.subLinks.map((subLink) => {
                                return (
                                  <Link
                                    href={subLink.href}
                                    key={subLink.href}
                                    onClick={() => {
                                      setActiveParent(link.text)
                                    }}
                                    className={cn(
                                      "inline-flex pr-2 pl-12 py-3 items-center gap-3 rounded-md text-neutral-600 font-body text-base font-semibold",
                                      {
                                        "text-brand-600 bg-brand-50": active(
                                          subLink.href
                                        )
                                      }
                                    )}>
                                    {subLink.text}
                                  </Link>
                                )
                              })}
                            </div>
                          </If>
                        </div>
                      )
                    } else {
                      return null
                    }
                  })}
                </div>
              </nav>
            )
          })}
        </div>
      </div>
      <nav className="flex flex-col py-4 bg-white gap-2 px-4 z-20 sticky w-full bottom-0">
        {FooterLinks.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.href}
              className={cn(
                "inline-flex px-3 w-full py-2 items-center gap-3 text-neutral-600 rounded-md font-body text-base font-semibold",
                {
                  "text-brand-600  bg-brand-50": active(link.href)
                }
              )}>
              <link.icon height={24} width={24} />
              {link.text}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default Aside
