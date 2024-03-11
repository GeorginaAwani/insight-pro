import React from "react"
import { cn } from "../../utils"
import { ReusableComponentSizes } from "@repo/shared/types/shared"
import { iconButtonSizeStyles, sizeStyles } from "./button-styles"

export interface ButtonGroupWrapperProps extends React.ComponentProps<"div"> {
  children: React.ReactElement<typeof Button>[]
  spacing: "collapse" | "space"
}
export interface ButtonGroupButtonProps extends React.ComponentProps<"button"> {
  variant: "primary" | "secondary" | "ghost" | "collapsed"
  buttonType: "icon" | "text"
  size: ReusableComponentSizes
  children: React.ReactNode
  loading?: boolean
}

const variantStyles: Record<ButtonGroupButtonProps["variant"], string> = {
  primary:
    "text-neutral-50 bg-brand-600 hover:bg-brand-500 focus-visible:bg-brand-600 active:bg-brand-600 hover:shadow-[0_1px_2px_0_rgba(0,0,0,0.0.5)] focus-visible:outline active:outline focus-visible:outline-offset-2 focus-visible:outline-brand-100 focus-visible:outline-2 active:outline-offset-2 active:outline-brand-100 active:outline-2 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:outline-none disabled:border-none disabled:shadow-none",
  secondary:
    "bg-white text-neutral-600 border border-solid border-neutral-300 hover:bg-neutral-50 active:bg-neutral-100 focus-visible:bg-neutral-100 focus-visible:outline active:outline focus-visible:outline-offset-2 active:outline-offset-2 active:outline-brand-100 focus-visible:outline-brand-100 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:outline-none disabled:border-none disabled:shadow-none",
  ghost:
    "bg-white border-none text-neutral-600 hover:bg-neutral-50 active:bg-neutral-100 focus-visible:bg-neutral-100 focus-visible:outline active:outline focus-visible:outline-offset-2 active:outline-offset-2 active:outline-brand-100 focus-visible:outline-brand-100  disabled:bg-neutral-100 disabled:text-neutral-400 disabled:outline-none disabled:border-none disabled:  -none",
  collapsed:
    "text-neutral-600 bg-white border-r border-solid hover:bg-neutral-50 border-r-neutral-300 last:border-none active:bg-neutral-100 focus-visible:bg-neutral-100  disabled:bg-neutral-100 disabled:text-neutral-400 disabled:outline-none disabled:border-none disabled:shadow-none"
}
const Button = React.forwardRef<
  React.ElementRef<"button">,
  ButtonGroupButtonProps
>((props, ref) => {
  const {
    variant,
    children,
    size,
    loading = false,
    className = "",
    disabled,
    buttonType,
    ...rest
  } = props

  const sizeStyleFactory =
    buttonType === "text" ? sizeStyles : iconButtonSizeStyles

  return (
    <button
      ref={ref}
      disabled={disabled}
      {...rest}
      className={cn(
        "font-body flex justify-center text-center items-center cursor-pointer",
        sizeStyleFactory[size],
        variantStyles[variant],
        {
          "rounded-none": variant === "collapsed",
          "first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md":
            size === "xl" || size === "md" || size === "lg",
          "first:rounded-tl first:rounded-bl last:rounded-br last:rounded-bl":
            size === "sm" || size === "xs",
          "pointer-events-none cursor-not-allowed": disabled,
          "text-neutral-900": buttonType === "icon" && variant !== "primary"
        },
        className
      )}>
      {children}
    </button>
  )
})

const Wrapper = React.forwardRef<
  React.ElementRef<"div">,
  ButtonGroupWrapperProps
>((props, ref) => {
  const { children, spacing, className = "" } = props

  return (
    <div
      ref={ref}
      className={cn(
        "flex gap-3 w-fit h-fit",
        {
          "gap-0 border border-solid border-neutral-300 rounded-md hover:shadow-[0_1px_2px_0_rgba(0,0,0,0.0.5)]":
            spacing === "collapse"
        },
        className
      )}>
      {children}
    </div>
  )
})
export const ButtonGroup = {
  Button,
  Wrapper
}
