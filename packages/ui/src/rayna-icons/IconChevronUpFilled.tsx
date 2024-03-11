import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChevronUpFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm5.698 6.299a2 2 0 0 1 2.604 0l6.349 5.442a1 1 0 0 1-1.302 1.518L12 9.817 5.65 15.26a1 1 0 0 1-1.3-1.518l6.348-5.442Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChevronUpFilled)
export default Memo
