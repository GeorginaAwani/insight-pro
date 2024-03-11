import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCardOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M4 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM16 15a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 6.5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-11Zm4-2a2 2 0 0 0-2 2V7h18v-.5a2 2 0 0 0-2-2H5ZM21 9H3v8.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCardOutline)
export default Memo
