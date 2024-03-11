"use client"
import React, { Suspense } from "react"
import { IconChevronRight } from "@repo/ui/ungrouped-icons"
import { useSearchParams } from "next/navigation"
import { Button, PinInput } from "@repo/ui/components"
import { isClerkAPIResponseError, useSignUp } from "@clerk/nextjs"
import { useTimeout } from "@mantine/hooks"
import { useRouter } from "next/navigation"
import { useToast } from "@repo/shared/contexts"

const OTP_ = () => {
  const { signUp, isLoaded, setActive } = useSignUp()
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()
  const [token, setToken] = React.useState("")
  const [resendDisabled, setResendDisabled] = React.useState(false)
  const { start, clear } = useTimeout(() => setResendDisabled(false), 30000)
  const searchParams = useSearchParams()
  const email = searchParams.get("email")
  const { openToast } = useToast()

  const resendOTP = async () => {
    if (!isLoaded) {
      setLoading(false)
      return
    }
    setLoading(true)

    try {
      const sendOTP = await signUp.prepareEmailAddressVerification({
        strategy: "email_code"
      })
      console.log(sendOTP)

      setResendDisabled(true)
      start()
      openToast({
        actionType: "link",
        size: "sm",
        primaryText: "OTP resent successfully",
        color: "success"
      })
    } catch (error) {
      console.log(JSON.stringify(error, null, 2))
      if (isClerkAPIResponseError(error)) {
        openToast({
          actionType: "link",
          size: "sm",
          primaryText: error.errors[0]?.longMessage || error.message,
          color: "error"
        })
      } else {
        openToast({
          actionType: "link",
          size: "sm",
          primaryText: "Something went wrong",
          color: "error"
        })
      }
    }
    setLoading(false)
  }

  const verifyOTP = async () => {
    setLoading(true)
    if (!isLoaded) {
      setLoading(false)
      return
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: token
      })
      if (completeSignUp.status !== "complete") {
        console.log(completeSignUp)
        openToast({
          actionType: "link",
          size: "sm",
          primaryText: "Something went wrong",
          color: "error"
        })
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId })
        router.push("/onboard")
      }
    } catch (error) {
      console.log(JSON.stringify(error, null, 2))
      if (isClerkAPIResponseError(error)) {
        openToast({
          actionType: "link",
          size: "sm",
          primaryText: error.errors[0]?.longMessage || error.message,
          color: "error"
        })
      } else {
        openToast({
          actionType: "link",
          size: "sm",
          primaryText: "Something went wrong",
          color: "error"
        })
      }
    }
    setLoading(false)
  }
  React.useEffect(() => {
    return () => {
      clear()
    }
  }, [])

  return (
    <div className="mb-[82px]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-brand-600 text-[2rem] font-semibold leading-8 font-body">
            Verify your email
          </h1>

          <p className="text-neutral-600 font-base leading-6 font-body">
            We just sent a 6-digit code to {email}, enter it below.
          </p>
        </div>
        <form className="flex flex-col gap-6">
          <PinInput
            length={6}
            token={token}
            disabled={!isLoaded || loading}
            onChange={(e) => {
              setToken(e)
            }}
            size="sm"
          />
          <Button
            variant="primary"
            variantType="contained"
            className="rounded-full"
            size="xl"
            disabled={!isLoaded || loading || token.length !== 6}
            fullWidth
            onClick={(e) => {
              e.preventDefault()
              verifyOTP()
            }}>
            Verify Email
          </Button>
          <div className="w-full flex gap-1 items-center justify-center">
            <p className="text-neutral-900 font-body text-sm">
              Didn’t see a code?
            </p>

            <button
              disabled={!isLoaded || resendDisabled || loading}
              className="inline-flex gap-1 text-brand-600 font-medium text-xs disabled:text-neutral-400"
              onClick={(e) => {
                e.preventDefault()
                resendOTP()
              }}>
              Resend to email <IconChevronRight height={16} width={16} />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function OTP() {
  return (
    <Suspense>
      <OTP_ />
    </Suspense>
  )
}
