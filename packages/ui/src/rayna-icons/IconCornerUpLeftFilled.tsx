import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCornerUpLeftFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM3.793 9.207a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L6.914 7.5H8.5c6.627 0 12 5.373 12 12a1 1 0 1 1-2 0c0-5.523-4.477-10-10-10H6.914l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCornerUpLeftFilled)
export default Memo
