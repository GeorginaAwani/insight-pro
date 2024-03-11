import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMoney1Filled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M13 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 5h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm0 1.5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2H5Zm11 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm-11 8a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H5Zm11 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMoney1Filled)
export default Memo
