import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChevronHFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm18.5 7a1 1 0 0 1-.293.707l-5 5a1 1 0 0 1-1.414-1.414L18.086 12l-4.293-4.293a1 1 0 0 1 1.414-1.414l5 5A1 1 0 0 1 20.5 12Zm-16.707.707a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414L5.914 12l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChevronHFilled)
export default Memo
