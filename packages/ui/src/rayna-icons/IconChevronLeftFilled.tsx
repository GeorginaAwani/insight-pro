import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChevronLeftFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm3.299 8.698a2 2 0 0 0 0 2.604l5.442 6.349a1 1 0 0 0 1.518-1.302L9.817 12l5.442-6.35a1 1 0 0 0-1.518-1.3l-5.442 6.348Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChevronLeftFilled)
export default Memo
