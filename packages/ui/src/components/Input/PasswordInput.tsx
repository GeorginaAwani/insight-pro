import React from "react"
import { TextInputProps } from "./TextInput"
import { If } from "../Utilities/If"
import { cn } from "../../utils"
import { IconEyeOutline, IconEyeSlashOutline } from "../../rayna-icons"

export interface PasswordInputProps
  extends Omit<TextInputProps, "type" | "rightIcon" | "rightIconClassName"> {}

export const PasswordInput = React.forwardRef<
  React.ElementRef<"input">,
  PasswordInputProps
>((props, ref) => {
  const {
    className,
    label,
    disabled,
    errorMessage,
    required,
    name,
    size = "md",
    value,
    fullWidth = false,
    hint,
    leftIcon,
    leftIconClassName,
    labelIcon,
    labelIconClassName,
    ...rest
  } = props
  const [showPassword, setShowPassword] = React.useState(false)
  const rightIcon = showPassword ? <IconEyeSlashOutline /> : <IconEyeOutline />
  return (
    <div className={cn("flex flex-col gap-1.5", { "w-full": fullWidth })}>
      <If condition={!!label}>
        <div className="inline-flex gap-[1px] items-center">
          <label
            htmlFor={name}
            className="font-body capitalize  text-neutral-900 text-sm font-medium">
            {label}
            <If
              condition={!!required}
              fallback={
                <span className="text-neutral-500 font-normal">(Optional)</span>
              }>
              <sup className="text-brand-600">*</sup>
            </If>
          </label>
          {labelIcon
            ? React.cloneElement(labelIcon, {
                height: 16,
                width: 16,
                className: cn("text-neutral-600", labelIconClassName)
              })
            : null}
        </div>
      </If>

      <div className={cn("relative", { "w-full": fullWidth })}>
        {leftIcon
          ? React.cloneElement(leftIcon, {
              height: 20,
              width: 20,
              className: cn(
                "text-neutral-600 absolute left-3 top-2",
                { "top-2.5": size === "md" },
                leftIconClassName
              )
            })
          : null}

        <input
          id={name}
          type={showPassword ? "text" : "password"}
          name={name}
          required={required}
          disabled={disabled}
          minLength={1}
          autoComplete="off"
          value={value}
          ref={ref}
          className={cn(
            "w-full h-fit font-body text-neutral-900 py-2 px-3 rounded-lg border border-solid border-neutral-300 bg-white placeholder:text-neutral-400 focus-visible:border-2 focus-visible:border-brand-500 focus-visible:ring-4  focus-visible:ring-brand-100 disabled:border-neutral-200 disabled:text-neutral-400 disabled:bg-neutral-100 basis-[calc(17%)]",
            {
              "text-base h-10": size === "md",
              "text-sm h-9": size === "sm",
              "border-2 border-brand-500": value && !errorMessage,
              "border-red-400 focus-visible:border-red-400 focus-visible:ring-4 focus-visible:ring-red-100":
                !!errorMessage,

              "pl-8": leftIcon,
              "pr-8": rightIcon
            },
            className
          )}
          {...rest}
        />
        <span
          role="button"
          aria-label={showPassword ? "Hide password" : "Show password"}
          className="cursor-pointer"
          onClick={() => {
            setShowPassword((p) => !p)
          }}>
          {rightIcon
            ? React.cloneElement(rightIcon, {
                height: 20,
                width: 20,
                className: cn("text-neutral-600 absolute right-3 top-2", {
                  "text-red-400": !!errorMessage,
                  "top-2.5": size === "md"
                })
              })
            : null}
        </span>
      </div>
      {errorMessage ? (
        <p className="font-body text-sm text-red-400">{errorMessage}</p>
      ) : hint ? (
        <p className="font-body text-sm text-neutral-500">{hint}</p>
      ) : null}
    </div>
  )
})
