import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChevronRightFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm10.701 8.698a2 2 0 0 1 0 2.604L10.26 19.65a1 1 0 0 1-1.518-1.302L14.183 12 8.74 5.65a1 1 0 1 1 1.518-1.3l5.442 6.348Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChevronRightFilled)
export default Memo
