import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconServerOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M15 6.5a1 1 0 1 0 0 2h4.5a1 1 0 1 0 0-2H15ZM9.5 7.5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3.5a4 4 0 1 0 0 8h14a4 4 0 0 0 0-8H5Zm14 2a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4h14Z"
      fill="currentColor"
    />
    <path
      d="M14 16.5a1 1 0 0 1 1-1h4.5a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1ZM10.5 15.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 12.5a4 4 0 0 0 0 8h14a4 4 0 0 0 0-8H5Zm14 2a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4h14Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconServerOutline)
export default Memo
