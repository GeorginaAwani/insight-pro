import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChevronVFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm10-1.5a1 1 0 0 1 .707.293l5 5a1 1 0 0 1-1.414 1.414L12 5.914l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5A1 1 0 0 1 12 3.5Zm.707 16.707a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L12 18.086l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChevronVFilled)
export default Memo
