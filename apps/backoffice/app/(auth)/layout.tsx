"use client"
import React from "react"
import Image from "next/image"
import bottomLeftImage from "/public/images/auth-edge-2.webp"
import topRightImage from "/public/images/auth-edge.webp"
import Logo from "/public/assets/Insite_Logo.svg"
import { cn } from "@repo/ui/ui-utils"

const layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <main className="bg-neutral-100 min-h-screen h-full relative w-full">
      <div className="max-w-[1440px] mx-auto min-w-80 flex items-stretch bg-neutral-100 relative min-h-[inherit] h-full px-6 lg:px-[87px] py-8 lg:py-[103px]">
        <Image
          src={topRightImage.src}
          alt="edge image"
          width={topRightImage.width}
          height={topRightImage.height}
          className="absolute top-0 right-0"
        />

        <section className="rounded-2xl overflow-hidden bg-white p-3 w-full min-h-full relative z-10 flex items-stretch justify-between">
          <Image
            src={bottomLeftImage.src}
            alt="edge image"
            width={bottomLeftImage.width}
            height={bottomLeftImage.height}
            className="absolute bottom-0 left-0 z-0"
          />
          <div className="relative z-10 flex w-full justify-between items-center">
            <div className="flex flex-col gap-16 mx-auto w-full max-w-[360px] lg:pt-[82px]">
              <Logo />
              {children}
            </div>
            <div className="bg-[url(/images/auth-banner.webp)] bg-cover bg-no-repeat bg-center flex rounded-xl h-full w-1/2 items-end">
              <div className="px-[50px] pb-[58px] flex flex-col gap-6">
                <div>
                  <blockquote className="font-body inline-flex flex-col text-white text-xl font-medium">
                    “Insite is my window to the world. Through this service, I
                    have managed to transfer our church engagement into a global
                    audience.”
                    <cite className="text-sm pt-[26px] !not-italic">
                      John Snow, Media Co-ordinator
                    </cite>
                  </blockquote>
                </div>
                <div className="flex gap-[5px] items-center justify-start">
                  <span
                    className={cn(
                      "rounded-full block aspect-square h-[13px] w-[13px] border-2 border-solid bg-transparent border-neutral-50",
                      {
                        "bg-neutral-50": true
                      }
                    )}></span>
                  <span
                    className={cn(
                      "rounded-full block aspect-square h-[13px] w-[13px] border-2 border-solid bg-transparent border-neutral-50",
                      {
                        "bg-neutral-50": false
                      }
                    )}></span>
                  <span
                    className={cn(
                      "rounded-full block aspect-square h-[13px] w-[13px] border-2 border-solid bg-transparent border-neutral-50",
                      {
                        "bg-neutral-50": false
                      }
                    )}></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default layout
