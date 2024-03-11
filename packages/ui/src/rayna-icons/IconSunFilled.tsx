import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSunFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M13 2a1 1 0 1 0-2 0v1.5a1 1 0 1 0 2 0V2ZM3.84 6.134a1 1 0 0 0-1 1.732l1.299.75a1 1 0 0 0 1-1.732l-1.3-.75ZM18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM18.494 15.5a1 1 0 0 1 1.366-.366l1.299.75a1 1 0 1 1-1 1.732l-1.3-.75a1 1 0 0 1-.365-1.366ZM18.86 7.134a1 1 0 1 0 1 1.732l1.299-.75a1 1 0 1 0-1-1.732l-1.3.75ZM12 19a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V20a1 1 0 0 1 1-1ZM2.474 17.5a1 1 0 0 1 .366-1.366l1.299-.75a1 1 0 1 1 1 1.732l-1.3.75a1 1 0 0 1-1.365-.366Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSunFilled)
export default Memo
