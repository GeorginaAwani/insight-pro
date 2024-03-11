import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSimFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 18V6a3 3 0 0 1 3-3h7.014a3 3 0 0 1 2.052.811l2.986 2.8A3 3 0 0 1 20 8.8V18a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3ZM8.5 6a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSimFilled)
export default Memo
