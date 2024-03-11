import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconDollarOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 2a1 1 0 1 0-2 0v1a5 5 0 0 0 0 10v6a3 3 0 0 1-3-3 1 1 0 1 0-2 0 5 5 0 0 0 5 5v1a1 1 0 1 0 2 0v-1a5 5 0 0 0 0-10V5a3 3 0 0 1 3 3 1 1 0 1 0 2 0 5 5 0 0 0-5-5V2Zm-2 3a3 3 0 0 0 0 6V5Zm2 8v6a3 3 0 1 0 0-6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconDollarOutline)
export default Memo
