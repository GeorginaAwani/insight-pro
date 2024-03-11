"use client"
import { Button } from "@repo/ui/components"
import React, { Suspense } from "react"
import Google from "/public/assets/Google.svg"
import { IconChevronRight, IconMail01 } from "@repo/ui/ungrouped-icons"
import { useRouter, useSearchParams } from "next/navigation"
import useOauth from "../../../hooks/useOauth"
const Auth_ = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = React.useState(false)
  const redirectUrl = searchParams.get("redirect_url")
  const { signInWithGoogle, isOauthLoaded } = useOauth()

  return (
    <div className="mb-[82px]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-brand-600 text-[2rem] font-semibold leading-8 font-body">
            Take charge of your Church Growth
          </h1>

          <p className="text-neutral-600 font-base leading-6 font-body">
            The best and most seamless way to keep your church enlightened. Try
            it Now.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center max-w-full">
          <div className="flex flex-col gap-3 w-full">
            <Button
              variant="secondary"
              leftIcon={<Google />}
              fullWidth
              className="rounded-full"
              size="xl"
              disabled={!isOauthLoaded || loading}
              onClick={() => {
                if (signInWithGoogle) {
                  setLoading(true)
                  signInWithGoogle()
                    .then(() => setLoading(false))
                    .catch(() => {
                      setLoading(false)
                    })
                }
              }}
              leftIconClassName="mr-3"
              variantType="soft">
              Sign up with Google
            </Button>
            <Button
              variant="secondary"
              leftIcon={<IconMail01 />}
              fullWidth
              className="rounded-full"
              size="xl"
              onClick={() => {
                let url = "/register"
                if (redirectUrl) {
                  url = url + `?redirect_url=${encodeURIComponent(redirectUrl)}`
                }
                router.push(url)
              }}
              leftIconClassName="mr-3"
              variantType="soft">
              Sign up with Email
            </Button>
          </div>
          <div
            className="flex items-center justify-center gap-6"
            aria-hidden="true">
            <div className="w-[102px] h-[1px] bg-neutral-200" />
            <span className="text-neutral-600 font-body text-base">or</span>
            <div className="w-[102px] h-[1px] bg-neutral-200" />
          </div>

          <Button
            variant="secondary"
            fullWidth
            onClick={() => {
              let url = "/login"
              if (redirectUrl) {
                url = url + `?redirect_url=${encodeURIComponent(redirectUrl)}`
              }
              router.push(url)
            }}
            className="rounded-full !min-w-0"
            size="xl"
            variantType="soft">
            Already have an account?&nbsp;
            <span className="font-body inline-flex gap-1 items-center text-brand-600 text-xs leading-4 font-medium">
              Login
              <IconChevronRight height={16} width={16} />
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}
export default function Auth() {
  return (
    <Suspense>
      <Auth_ />
    </Suspense>
  )
}
