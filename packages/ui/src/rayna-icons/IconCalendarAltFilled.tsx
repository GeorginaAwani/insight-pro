import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCalendarAltFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M8 2a1 1 0 0 1 1 1v1.5H7V3a1 1 0 0 1 1-1ZM15 5H9v1a1 1 0 0 1-2 0V5H6a3 3 0 0 0-3 3v.5h18V8a3 3 0 0 0-3-3h-1v1a1 1 0 1 1-2 0V5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 10.5V19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8.5H3ZM5 18a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm11-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"
      fill="currentColor"
    />
    <path d="M17 3a1 1 0 1 0-2 0v1.5h2V3Z" fill="currentColor" />
  </svg>
)
const Memo = memo(SvgIconCalendarAltFilled)
export default Memo
