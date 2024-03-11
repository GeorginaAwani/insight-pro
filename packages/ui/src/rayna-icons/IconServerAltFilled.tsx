import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconServerAltFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M19.454 14c1.074 0 2.016.564 2.546 1.412V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v9.412A2.998 2.998 0 0 1 4.545 14h14.91Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 15h14a3 3 0 1 1 0 6H5a3 3 0 1 1 0-6Zm8.818 2a1 1 0 1 0 0 2h4.091a1 1 0 1 0 0-2h-4.09Zm-5.09 1a1 1 0 0 1 1-1h1.818a1 1 0 0 1 0 2H9.727a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconServerAltFilled)
export default Memo
