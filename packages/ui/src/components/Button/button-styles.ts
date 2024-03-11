import { ReusableComponentSizes } from "@repo/shared/types/shared"

export type BtnVariants = "primary" | "secondary" | "destructive"
export type BtnVariantType = "contained" | "outlined" | "soft" | "ghost"
export type SizeStyles = Record<ReusableComponentSizes, string>
export type VariantStyles = Record<BtnVariants, string>

export const sizeStyles: SizeStyles = {
  xl: "rounded-md text-sm font-semibold leading-5 px-3 py-2.5 h-10",
  lg: "rounded-md text-sm font-semibold leading-5 px-2.5 py-2 h-9",
  md: "rounded-md text-sm font-semibold leading-5 px-2.5 py-1.5 h-8",
  sm: "rounded text-sm font-semibold leading-5 px-2.5 py-1 h-7",
  xs: "rounded text-xs font-semibold leading-4 py-0.5 px-2 h-6"
}

export const iconButtonSizeStyles: SizeStyles = {
  xl: "rounded-md text-sm font-semibold leading-5 p-2.5 h-10",
  lg: "rounded-md text-sm font-semibold leading-5 p-2 h-9",
  md: "rounded-md text-sm font-semibold leading-5 p-1.5 h-8",
  sm: "rounded text-sm font-semibold leading-5 p-1 h-7",
  xs: "rounded text-xs font-semibold leading-4 p-0.5 h-6"
}

export const variantStyles: VariantStyles = {
  primary:
    "text-white bg-brand-600 hover:bg-brand-500 focus-visible:bg-brand-600 active:bg-brand-600 hover:shadow-[0_1px_2px_0_rgba(0,0,0,0.0.5)] focus-visible:outline active:outline focus-visible:outline-offset-2 focus-visible:outline-brand-100 focus-visible:outline-2 active:outline-offset-2 active:outline-brand-100 active:outline-2 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:outline-none disabled:border-none disabled:shadow-none",
  secondary:
    "text-neutral-50 bg-neutral-900 hover:bg-neutral-800 shadow-[0_1px_2px_0_rgba(0,0,0,0.0.5)] hover:shadow-[0_1px_2px_0_rgba(0,0,0,0.0.5)] focus-visible:outline active:outline focus-visible:outline-offset-2 focus-visible:outline-brand-100 focus-visible:outline-2 active:outline-offset-2 active:outline-brand-100 active:outline-2 disabled:bg-neutral-100 focus-visible:bg-neutral-900 active:bg-neutral-900 disabled:text-neutral-400 disabled:outline-none disabled:border-none disabled:shadow-none",
  destructive:
    "text-white bg-red-600 hover:bg-red-500 focus-visible:bg-red-600 active:bg-red-600 hover:shadow-[0_1px_2px_0_rgba(0,0,0,0.0.5)] focus-visible:outline active:outline focus-visible:outline-offset-2 active:outline-offset-2 focus-visible:outline-red-100 focus-visible:outline-2 active:outline-red-100 active:outline-2 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:outline-none disabled:border-none disabled:shadow-none"
}
export const iconStyles: VariantStyles = {
  primary:
    "text-neutral-50 group-hover:text-neutral-50 group-focus-visible:text-neutral-50 group-disabled:text-neutral-300 group-active:text-neutral-50",
  secondary:
    "text-neutral-50 group-hover:text-neutral-50 group-focus-visible:text-neutral-50 group-active:text-neutral-50 group-disabled:text-neutral-300",
  destructive:
    "text-neutral-50 group-hover:text-neutral-50 group-focus-visible:text-neutral-50  group-active:text-neutral-50 group-disabled:text-neutral-300 "
}

export const variantStylesOutlined: VariantStyles = {
  primary:
    "border border-brand-600 border-solid bg-white hover:bg-neutral-50 focus-visible:bg-neutral-100 active:bg-neutral-100 text-brand-700 disabled:border-none",
  secondary:
    "shadow-none hover:shadow-none active:shadow-[0_1px_2px_0_rgba(0,0,0,0.0.5)] focus-visible:shadow-[0_1px_2px_0_rgba(0,0,0,0.0.5)] border border-solid border-neutral-300 bg-white text-neutral-600 hover:bg-neutral-50 focus-visible:bg-neutral-100 active:bg-neutral-100 disabled:border-none",
  destructive:
    "bg-white border border-solid border-red-400 focus-visible:bg-neutral-100 active:bg-neutral-100 hover:bg-neutral-50 disabled:border-none text-red-700"
}

export const iconStylesOutlined: VariantStyles = {
  primary:
    "text-brand-500 group-hover:text-brand-500 group-focus-visible:text-brand-500 group-active:text-brand-500",
  secondary:
    "text-neutral-900 group-hover:text-neutral-900 group-focus-visible:text-neutral-900 group-active:text-neutral-900",
  destructive:
    "text-red-500 group-hover:text-red-500 group-focus-visible:text-red-500 group-active:text-red-500"
}

export const variantStylesSoft: VariantStyles = {
  primary:
    "bg-brand-50 text-brand-600 hover:bg-brand-100 active:bg-brand-50 focus-visible:bg-brand-50 disabled:bg-neutral-100 disabled:text-neutral-400",
  secondary:
    "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 active:bg-neutral-300 focus-visible:bg-neutral-300 disabled:bg-neutral-100 disabled:text-neutral-400",
  destructive:
    "bg-red-50 text-red-600 hover:bg-red-100 active:bg-red-50 focus-visible:bg-red-50 disabled:bg-neutral-100 disabled:text-neutral-400"
}

export const iconStylesSoft: VariantStyles = {
  primary:
    "text-brand-500 group-hover:text-brand-500 group-active:text-brand-500 group-focus-visible:text-brand-500",
  secondary:
    "text-neutral-900 group-hover:text-neutral-900 group-focus-visible:text-neutral-900 group-active:text-neutral-900",
  destructive:
    "text-red-500 group-hover:text-red-500 group-focus-visible:text-red-500 group-active:text-red-500"
}

export const variantStylesGhost: VariantStyles = {
  primary:
    "bg-transparent hover:bg-neutral-50 active:bg-transparent focus-visible:bg-transparent active:border focus-visible:border active:border-brand-600 active:border-solid focus-visible:border-brand-600 focus-visible:border-solid text-brand-600 disabled:bg-transparent",
  secondary:
    "bg-transparent hover:bg-neutral-50 active:bg-neutral-100 focus-visible:bg-neutral-100 text-neutral-600 hover:text-neutral-600 active:text-neutral-600 focus-visible:text-neutral-600 disabled:bg-transparent",
  destructive:
    "bg-transparent shadow-[0_1px_2px_0_rgba(0,0,0,0.0.5)] text-red-600 active:bg-transparent focus-visible:bg-transparent active:border focus-visible:border active:border-solid focus-visible:border-solid active:border-red-600 focus-visible:border-red-600 hover:bg-red-50 disabled:bg-transparent"
}

export const iconStylesGhost: VariantStyles = {
  primary:
    "text-brand-500 group-hover:text-brand-500 group-active:text-brand-500 group-focus-visible:text-brand-500",
  secondary:
    "text-neutral-900 group-hover:text-neutral-900 group-focus-visible:text-neutral-900 group-active:text-neutral-900",
  destructive:
    "text-red-500 group-hover:text-red-500 group-active:text-red-500 group-focus-visible:text-red-500"
}
