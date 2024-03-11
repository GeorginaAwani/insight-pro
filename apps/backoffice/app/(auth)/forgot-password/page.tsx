"use client"
import { Button, TextInput } from "@repo/ui/components"
import { IconChevronRight } from "@repo/ui/ungrouped-icons"
import { useRouter, useSearchParams } from "next/navigation"
import React, { Suspense } from "react"
import { forgotPasswordSchema } from "@repo/shared/validators"
import { useForm, Controller, type SubmitHandler } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { isClerkAPIResponseError, useSignIn } from "@clerk/nextjs"
import { useToast } from "@repo/shared/contexts"
import { omit } from "lodash"

type forgotPasswordType = z.infer<typeof forgotPasswordSchema>

const ForgotPassword_ = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = React.useState(false)
  const { openToast } = useToast()
  const { isLoaded, signIn } = useSignIn()
  const redirectUrl = searchParams.get("redirect_url")
  const { control, handleSubmit, formState, reset, trigger } =
    useForm<forgotPasswordType>({
      resolver: zodResolver(forgotPasswordSchema),
      defaultValues: {
        email: ""
      }
    })
  const onSubmit: SubmitHandler<forgotPasswordType> = async (values) => {
    setLoading(true)
    if (!isLoaded) {
      setLoading(false)
      return
    }

    try {
      await signIn?.create({
        strategy: "reset_password_email_code",
        identifier: values.email
      })
      openToast({
        actionType: "link",
        size: "sm",
        primaryText: "Request successful",
        color: "success"
      })
      router.push(`/reset-password?email=${encodeURIComponent(values.email)}`)
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
    <div className="mb-[82px]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-brand-600 text-[2rem] font-semibold leading-8 font-body">
            Forgot your password?
          </h1>
          <p className="text-neutral-600 font-base leading-6 font-body">
            Enter the email used to create your insite account and we’ll email
            you a link to reset your password.
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
                    disabled={!isLoaded || loading}
                    errorMessage={formState?.errors?.email?.message}
                    fullWidth
                    required
                    placeholder="example@email.com"
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
            <Button
              variant="primary"
              type="submit"
              fullWidth
              className="rounded-full"
              size="xl"
              disabled={!formState.isValid || !isLoaded || loading}
              variantType="contained">
              Reset password
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
                  url = url + `?redirect_url=${encodeURIComponent(redirectUrl)}`
                }
                router.push(url)
              }}
              className="rounded-full !min-w-0"
              size="xl"
              variantType="soft">
              Is this a mistake?&nbsp;
              <span className="font-body inline-flex gap-1 items-center text-brand-600 text-xs leading-4 font-medium">
                Return to login
                <IconChevronRight height={16} width={16} />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ForgotPassword() {
  return (
    <Suspense>
      <ForgotPassword_ />
    </Suspense>
  )
}
