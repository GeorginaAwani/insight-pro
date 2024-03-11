import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSwitchHorizontalFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm1.793 12.707a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L6.914 16H19.5a1 1 0 1 1 0 2H6.914l1.293 1.293a1 1 0 1 1-1.414 1.414l-3-3ZM20.207 6.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L17.086 8H4.5a1 1 0 0 1 0-2h12.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSwitchHorizontalFilled)
export default Memo
