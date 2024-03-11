import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPowerOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 3a1 1 0 1 0-2 0v1.055A9.001 9.001 0 0 0 12 22a9 9 0 0 0 1-17.945V3Zm-2 3.07V11a1 1 0 1 0 2 0V6.07A7.002 7.002 0 0 1 12 20a7 7 0 0 1-1-13.93Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPowerOutline)
export default Memo
