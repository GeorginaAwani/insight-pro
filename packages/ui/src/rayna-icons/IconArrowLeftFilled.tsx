import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconArrowLeftFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm-.707 9.293a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L7.414 13H19a1 1 0 1 0 0-2H7.414l2.293-2.293a1 1 0 0 0-1.414-1.414l-4 4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconArrowLeftFilled)
export default Memo
