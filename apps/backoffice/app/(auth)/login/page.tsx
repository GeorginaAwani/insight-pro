"use client"
import { Button, PasswordInput, TextInput } from "@repo/ui/components"
import { IconChevronRight } from "@repo/ui/ungrouped-icons"
import React, { Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { loginSchema } from "@repo/shared/validators"
import { useForm, Controller, type SubmitHandler } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSignIn, isClerkAPIResponseError } from "@clerk/nextjs"
import { ENV } from "../../../lib/constants"
import { useToast } from "@repo/shared/contexts"
import { omit } from "lodash"

type loginType = z.infer<typeof loginSchema>

const { backOfficeBaseURL } = ENV
const Login_ = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get("redirect_url")
  const { isLoaded, signIn, setActive } = useSignIn()
  const [loading, setLoading] = React.useState(false)
  const { control, handleSubmit, formState, reset, trigger } =
    useForm<loginType>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
        email: "",
        password: ""
      }
    })
  const { openToast } = useToast()

  const onSubmit: SubmitHandler<loginType> = async (values) => {
    setLoading(true)
    if (!isLoaded) {
      setLoading(false)
      return
    }

    try {
      const result = await signIn.create({
        identifier: values.email,
        password: values.password,
        redirectUrl: redirectUrl ? redirectUrl : "/onboard"
      })

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId })
        reset()
        router.push(redirectUrl || backOfficeBaseURL + "/onboard")
      } else {
        openToast({
          actionType: "link",
          size: "sm",
          primaryText: "Something went wrong",
          color: "error"
        })
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

  return (
    <Suspense>
      <div className="mb-[82px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-brand-600 text-[2rem] font-semibold leading-8 font-body">
              Take charge of your Church Growth
            </h1>

            <p className="text-neutral-600 font-base leading-6 font-body">
              The best and most seamless way to keep your church enlightened.
              Try it Now.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <form
              className="flex w-full flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => {
                  const spreadFields = omit(field, "onChange")
                  return (
                    <TextInput
                      size="md"
                      label="email"
                      fullWidth
                      disabled={!isLoaded || loading}
                      required
                      type="email"
                      placeholder="example@email.com"
                      onChange={(e) => {
                        if (field.onChange) {
                          field.onChange(e)
                        }
                        trigger("email")
                      }}
                      errorMessage={formState?.errors.email?.message}
                      {...spreadFields}
                    />
                  )
                }}
              />
              <div className="flex flex-col gap-2 w-full">
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => {
                    const spreadFields = omit(field, "onChange")
                    return (
                      <PasswordInput
                        size="md"
                        label="password"
                        fullWidth
                        required
                        placeholder="Enter password"
                        disabled={!isLoaded || loading}
                        onChange={(e) => {
                          if (field.onChange) {
                            field.onChange(e)
                          }
                          trigger("password")
                        }}
                        errorMessage={formState?.errors.password?.message}
                        {...spreadFields}
                      />
                    )
                  }}
                />

                <Link
                  href={
                    redirectUrl
                      ? `/forgot-password?redirect_url=${encodeURIComponent(
                          redirectUrl
                        )}`
                      : "/forgot-password"
                  }
                  className="text-brand-600 font-body text-sm">
                  Forgot Password?
                </Link>
              </div>
              <Button
                variant="primary"
                fullWidth
                className="rounded-full"
                size="xl"
                leftIconClassName="mr-3"
                type="submit"
                disabled={!formState.isValid || !isLoaded || loading}
                variantType="contained">
                Log in
              </Button>
            </form>

            <div className="flex flex-col gap-4 items-center max-w-full">
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
                  let url = "/register"
                  if (redirectUrl) {
                    url =
                      url + `?redirect_url=${encodeURIComponent(redirectUrl)}`
                  }
                  router.push(url)
                }}
                className="rounded-full !min-w-0"
                size="xl"
                variantType="soft">
                Don't have an account?&nbsp;
                <span className="font-body inline-flex gap-1 items-center text-brand-600 text-xs leading-4 font-medium">
                  Register
                  <IconChevronRight height={16} width={16} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default function Login() {
  return (
    <Suspense>
      <Login_ />
    </Suspense>
  )
}
