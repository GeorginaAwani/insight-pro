import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCalendarAltOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M5 17.5a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1ZM16 16.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 1.5a1 1 0 0 1 1 1v1h6v-1a1 1 0 1 1 2 0v1h1a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-11a4 4 0 0 1 4-4h1v-1a1 1 0 0 1 1-1Zm7 4a1 1 0 1 0 2 0h1a2 2 0 0 1 2 2V8H4v-.5a2 2 0 0 1 2-2h1a1 1 0 0 0 2 0h6Zm5 4.5H4v8.5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCalendarAltOutline)
export default Memo
