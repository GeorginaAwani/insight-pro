import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSunOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M13 2a1 1 0 1 0-2 0v1.5a1 1 0 1 0 2 0V2Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
      fill="currentColor"
    />
    <path
      d="M12 19a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V20a1 1 0 0 1 1-1ZM18.494 15.5a1 1 0 0 1 1.366-.366l1.299.75a1 1 0 1 1-1 1.732l-1.3-.75a1 1 0 0 1-.365-1.366ZM18.86 7.134a1 1 0 1 0 1 1.732l1.299-.75a1 1 0 1 0-1-1.732l-1.3.75ZM3.84 6.134a1 1 0 0 0-1 1.732l1.299.75a1 1 0 0 0 1-1.732l-1.3-.75ZM2.474 17.5a1 1 0 0 1 .366-1.366l1.299-.75a1 1 0 1 1 1 1.732l-1.3.75a1 1 0 0 1-1.365-.366Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSunOutline)
export default Memo
