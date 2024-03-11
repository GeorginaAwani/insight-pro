import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconServerFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 4.5h14a3 3 0 1 1 0 6H5a3 3 0 0 1 0-6Zm10 2a1 1 0 1 0 0 2h4.5a1 1 0 1 0 0-2H15Zm-5.5 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM5 13.5h14a3 3 0 1 1 0 6H5a3 3 0 1 1 0-6Zm10 2a1 1 0 1 0 0 2h4.5a1 1 0 1 0 0-2H15Zm-5.5 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconServerFilled)
export default Memo
