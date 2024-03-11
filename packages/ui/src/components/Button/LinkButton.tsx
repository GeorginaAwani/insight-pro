import React from "react"
import { cn } from "../../utils"
import Link from "next/link"

export interface LinkButtonProps extends React.ComponentProps<typeof Link> {
  size: "sm" | "xs"
  variant: "gray" | "black" | "brand" | "error" | "modifiable"
  underline?: boolean
  disabled?: boolean
}

const sizeStyles: Record<LinkButtonProps["size"], string> = {
  xs: "text-xs font-medium leading-4",
  sm: "text-sm font-medium leading-5"
}

const variantStyles: Record<LinkButtonProps["variant"], string> = {
  gray: "text-neutral-400 active:text-neutral-200 focus-visible:text-neutral-200",
  black: "text-neutral-200",
  brand: "text-brand-300",
  error: "text-red-300",
  modifiable: "text-white"
}

export const LinkButton = React.forwardRef<
  React.ElementRef<"a">,
  LinkButtonProps
>((props, ref) => {
  const {
    underline = false,
    href,
    disabled,
    variant,
    size,
    onClick,
    children = "",
    className = "",
    ...rest
  } = props

  const clickHandler: React.MouseEventHandler<HTMLAnchorElement> =
    React.useCallback(
      (event) => {
        if (disabled) {
          event.preventDefault()
        } else {
          if (onClick) {
            onClick(event)
          }
        }
      },
      [onClick, disabled]
    )
  const sizeStyle = sizeStyles[size]
  const variantStyle = variantStyles[variant]
  return (
    <Link
      ref={ref}
      aria-disabled={disabled}
      onClick={(e) => {
        clickHandler(e)
      }}
      href={href}
      {...rest}
      className={cn(
        "font-body ",
        { underline: underline, "text-neutral-500": disabled },
        sizeStyle,
        variantStyle,
        className
      )}>
      {children}
    </Link>
  )
})
