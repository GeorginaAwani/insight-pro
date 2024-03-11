import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconRotateRightFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm11.6 3a1 1 0 1 1 2 0v2.8a1 1 0 0 1-1 1h-2.8a1 1 0 1 1 0-2h.196A6 6 0 1 0 18 12a1 1 0 1 1 2 0 8 8 0 1 1-3.4-6.545V5Z"
      fill="current"
    />
  </svg>
)
const Memo = memo(SvgIconRotateRightFilled)
export default Memo
