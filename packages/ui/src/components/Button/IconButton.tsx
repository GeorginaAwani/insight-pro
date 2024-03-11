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
  iconButtonSizeStyles,
  variantStyles,
  variantStylesGhost,
  variantStylesOutlined,
  variantStylesSoft
} from "./button-styles"
export interface IconButtonProps extends React.ComponentProps<"button"> {
  variant: BtnVariants
  children: React.ReactElement
  variantType: BtnVariantType
  size?: ReusableComponentSizes
  loading?: boolean
  fullWidth?: boolean
}

export const IconButton = React.forwardRef<
  React.ElementRef<"button">,
  IconButtonProps
>((props, ref) => {
  const {
    variant,
    variantType,
    children,
    size = "xl",
    loading = false,
    fullWidth = false,
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
  const ghostStyles = variantType === "ghost" ? variantStylesGhost[variant] : ""
  const iconGhostStyles =
    variantType === "ghost" ? iconStylesGhost[variant] : ""
  return (
    <button
      ref={ref}
      disabled={disabled}
      className={cn(
        "font-body inline-flex group items-center justify-center text-center cursor-pointer group",
        iconButtonSizeStyles[size],
        variantStyles[variant],
        outlinedStyles,
        softStyles,
        ghostStyles,
        className,
        {
          "w-full": fullWidth,
          "pointer-events-none cursor-not-allowed": disabled
        }
      )}
      {...rest}>
      {React.cloneElement(children, {
        height: 20,
        width: 20,
        className: cn(
          iconStyles[variant],
          iconOutlinedStyles,
          iconSoftStyles,
          iconGhostStyles
        )
      })}
    </button>
  )
})
