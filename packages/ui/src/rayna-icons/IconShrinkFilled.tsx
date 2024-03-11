import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconShrinkFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm7.5 1.5a3 3 0 0 1-3 3h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 2 0v2Zm7 3a3 3 0 0 1-3-3v-2a1 1 0 1 1 2 0v2a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2h-3Zm-7 7a3 3 0 0 0-3-3h-2a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v3a1 1 0 1 0 2 0v-3Zm7-3a3 3 0 0 0-3 3v3a1 1 0 1 0 2 0v-3a1 1 0 0 1 1-1h3a1 1 0 1 0 0-2h-3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconShrinkFilled)
export default Memo
