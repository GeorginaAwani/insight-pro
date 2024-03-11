import "../../../dist/index.css"
import { cn } from "../../utils"
import { ReusableComponentSizes } from "@repo/shared/types/shared"
import React from "react"
import {
  BtnVariantType,
  BtnVariants,
  iconStyles,
  iconStylesGhost,
  iconStylesOutlined,
  iconStylesSoft,
  sizeStyles,
  variantStyles,
  variantStylesGhost,
  variantStylesOutlined,
  variantStylesSoft
} from "./button-styles"

export interface ButtonProps extends React.ComponentProps<"button"> {
  variant: BtnVariants
  children: React.ReactNode
  variantType: BtnVariantType
  size?: ReusableComponentSizes
  loading?: boolean
  fullWidth?: boolean
  leftIcon?: React.ReactElement
  leftIconClassName?: string
  rightIcon?: React.ReactElement
  rightIconClassName?: string
}

export const Button = React.forwardRef<React.ElementRef<"button">, ButtonProps>(
  (props, ref) => {
    const {
      variant,
      variantType,
      children,
      size = "xl",
      loading = false,
      fullWidth = false,
      leftIcon = null,
      leftIconClassName = "",
      rightIcon = null,
      rightIconClassName = "",
      className = "",
      disabled,
      ...rest
    } = props

    const outlinedStyles =
      variantType === "outlined" ? variantStylesOutlined[variant] : ""
    const iconOutlinedStyles =
      variantType === "outlined" ? iconStylesOutlined[variant] : ""
    const softStyles = variantType === "soft" ? variantStylesSoft[variant] : ""
    const iconSoftStyles = variantType === "soft" ? iconStylesSoft[variant] : ""
    const ghostStyles =
      variantType === "ghost" ? variantStylesGhost[variant] : ""
    const iconGhostStyles =
      variantType === "ghost" ? iconStylesGhost[variant] : ""
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "font-body min-w-[95px] flex items-center justify-center text-center cursor-pointer group ease-out duration-500",
          sizeStyles[size],
          variantStyles[variant],
          outlinedStyles,
          softStyles,
          ghostStyles,
          {
            "w-full": fullWidth,
            "pointer-events-none cursor-not-allowed": disabled
          },
          className
        )}
        {...rest}>
        <span className="inline-flex group gap-1 items-center w-full justify-center text-center">
          {leftIcon !== null ? (
            <span className="inline-flex items-center justify-center text-center h-fit">
              {React.cloneElement(leftIcon, {
                height: 20,
                width: 20,
                className: cn(
                  iconStyles[variant],
                  iconOutlinedStyles,
                  leftIconClassName,
                  iconSoftStyles,
                  iconGhostStyles
                )
              })}
            </span>
          ) : null}
          <span className="inline-flex items-center justify-center text-center">
            {children}
          </span>
          {rightIcon !== null ? (
            <span className="inline-flex items-center justify-center text-center h-fit">
              {React.cloneElement(rightIcon, {
                height: 20,
                width: 20,
                className: cn(
                  iconStyles[variant],
                  iconOutlinedStyles,
                  iconSoftStyles,
                  iconGhostStyles,
                  rightIconClassName
                )
              })}
            </span>
          ) : null}
        </span>
      </button>
    )
  }
)
