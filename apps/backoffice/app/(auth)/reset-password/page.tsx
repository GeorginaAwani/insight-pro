"use client"
import React, { Suspense, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button, PasswordInput, PinInput } from "@repo/ui/components"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller, type SubmitHandler } from "react-hook-form"
import * as z from "zod"
import { resetPasswordSchema } from "@repo/shared/validators"
import { isClerkAPIResponseError, useAuth, useSignIn } from "@clerk/nextjs"
import { useToast } from "@repo/shared/contexts"
import { omit } from "lodash"

type resetPasswordType = z.infer<typeof resetPasswordSchema>

const ResetPassword_ = () => {
  const { isLoaded, signIn } = useSignIn()
  const { signOut } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { openToast } = useToast()

  const searchParams = useSearchParams()
  const email = searchParams.get("email")

  const { control, handleSubmit, formState, watch, setValue, trigger } =
    useForm<resetPasswordType>({
      resolver: zodResolver(resetPasswordSchema),
      defaultValues: {
        password: "",
        otp: "",
        confirmPassword: ""
      }
    })

  const onSubmit: SubmitHandler<resetPasswordType> = async (values) => {
    setLoading(true)
    if (!isLoaded) {
      setLoading(false)
      return
    }

    try {
      const result = await signIn?.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code: values.otp,
        password: values.password
      })

      if (result.status === "complete") {
        signOut()
        openToast({
          actionType: "link",
          size: "sm",
          primaryText: "Your password was reset. please login.",
          color: "success"
        })
        router.push("/login")
      } else {
        openToast({
          actionType: "link",
          size: "sm",
          primaryText: "Something went wrong",
          color: "error"
        })
        console.log(result)
        return
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
    <div className="mb-[82px]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-brand-600 text-[2rem] font-semibold leading-8 font-body">
            Reset account password
          </h1>

          <p className="text-neutral-600 font-base leading-6 font-body">
            For the account {email}.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="flex flex-col gap-4">
          <PinInput
            length={6}
            label="OTP"
            required
            token={watch("otp")}
            disabled={!isLoaded || loading}
            onChange={(e) => {
              setValue("otp", e)
            }}
            size="sm"
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
                  errorMessage={formState?.errors?.password?.message}
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
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => {
              const spreadFields = omit(field, "onChange")
              return (
                <PasswordInput
                  size="md"
                  label="confirm new password"
                  fullWidth
                  required
                  placeholder="Enter password"
                  disabled={!isLoaded || loading}
                  errorMessage={formState?.errors?.confirmPassword?.message}
                  onChange={(e) => {
                    if (field.onChange) {
                      field.onChange(e)
                    }
                    trigger("confirmPassword")
                  }}
                  {...spreadFields}
                />
              )
            }}
          />
          <Button
            variant="primary"
            variantType="contained"
            className="rounded-full"
            size="xl"
            disabled={!formState.isValid || !isLoaded || loading}
            type="submit"
            fullWidth>
            Reset Password
          </Button>
        </form>
      </div>
    </div>
  )
}

export default function ResetPassword() {
  return (
    <Suspense>
      <ResetPassword_ />
    </Suspense>
  )
}
