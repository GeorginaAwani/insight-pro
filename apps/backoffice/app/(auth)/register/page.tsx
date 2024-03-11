"use client"
import { Button, PasswordInput } from "@repo/ui/components"
import { IconChevronRight } from "@repo/ui/ungrouped-icons"
import React, { Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { TextInput } from "@repo/ui/components"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller, type SubmitHandler } from "react-hook-form"
import * as z from "zod"
import { registerSchema } from "@repo/shared/validators"
import { useSignUp, isClerkAPIResponseError } from "@clerk/nextjs"
import { useToast } from "@repo/shared/contexts"
import { omit } from "lodash"
type registerType = z.infer<typeof registerSchema>

const Register_ = () => {
  const router = useRouter()
  const { signUp, isLoaded } = useSignUp()
  const [loading, setLoading] = React.useState(false)
  const { openToast } = useToast()
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get("redirect_url")
  const { control, handleSubmit, formState, reset, trigger } =
    useForm<registerType>({
      resolver: zodResolver(registerSchema),
      defaultValues: {
        email: "",
        password: ""
      }
    })

  const onSubmit: SubmitHandler<registerType> = async (values) => {
    setLoading(true)
    if (!isLoaded) {
      setLoading(false)
      return
    }

    try {
      await signUp.create({
        emailAddress: values.email,
        password: values.password
      })

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code"
      })

      router.push(`/otp?email=${encodeURIComponent(values.email)}`)
      reset()
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
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-full flex-col gap-4">
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
                      required
                      disabled={!isLoaded || loading}
                      placeholder="example@email.com"
                      errorMessage={formState?.errors.email?.message}
                      type="email"
                      onChange={(e) => {
                        if (field.onChange) {
                          field.onChange(e)
                        }
                        trigger("email")
                      }}
                      {...spreadFields}
                    />
                  )
                }}
              />
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
                      errorMessage={formState?.errors.password?.message}
                      onChange={(e) => {
                        if (field.onChange) {
                          field.onChange(e)
                        }
                        trigger("password")
                      }}
                      {...spreadFields}
                    />
                  )
                }}
              />

              <Button
                variant="primary"
                fullWidth
                className="rounded-full"
                size="xl"
                type="submit"
                disabled={!formState.isValid || !isLoaded || loading}
                leftIconClassName="mr-3"
                variantType="contained">
                Create Insite account
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
                  let url = "/login"
                  if (redirectUrl) {
                    url =
                      url + `?redirect_url=${encodeURIComponent(redirectUrl)}`
                  }
                  router.push(url)
                }}
                className="rounded-full !min-w-0"
                size="xl"
                type="button"
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
      </div>
    </Suspense>
  )
}

export default function Register() {
  return (
    <Suspense>
      {" "}
      <Register_ />
    </Suspense>
  )
}
