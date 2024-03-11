import React from "react"
import { If } from "../Utilities/If"
import { cn } from "../../utils"

export interface TextInputProps
  extends Omit<React.ComponentProps<"input">, "size"> {
  size: "sm" | "md"
  name?: string
  required?: boolean
  fullWidth?: boolean
  label?: string
  errorMessage?: string
  disabled?: boolean
  inputClassName?: string
  inputContainerClassName?: string
  rootClassName?: string
  hint?: string
  leftIcon?: React.ReactElement
  labelIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  leftIconClassName?: string
  rightIconClassName?: string
  labelIconClassName?: string
  type?: "text" | "email"
}
export const TextInput = React.forwardRef<
  React.ElementRef<"input">,
  TextInputProps
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
    type,
    hint,
    leftIcon,
    leftIconClassName,
    rightIconClassName,
    rightIcon,
    labelIcon,
    labelIconClassName,
    ...rest
  } = props

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
          type={type ? type : "text"}
          id={name}
          name={name}
          required={required}
          disabled={disabled}
          minLength={1}
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

        {rightIcon
          ? React.cloneElement(rightIcon, {
              height: 20,
              width: 20,
              className: cn(
                "text-neutral-600 absolute right-3 top-2",
                {
                  "text-red-400": !!errorMessage,
                  "top-2.5": size === "md"
                },
                rightIconClassName
              )
            })
          : null}
      </div>
      {errorMessage ? (
        <p className="font-body text-sm text-red-400">{errorMessage}</p>
      ) : hint ? (
        <p className="font-body text-sm text-neutral-500">{hint}</p>
      ) : null}
    </div>
  )
})
