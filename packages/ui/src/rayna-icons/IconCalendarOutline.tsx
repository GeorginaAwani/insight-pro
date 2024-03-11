import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCalendarOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 1a1 1 0 0 1 1 1v1h6V2a1 1 0 1 1 2 0v1h1a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h1V2a1 1 0 0 1 1-1Zm7 4a1 1 0 1 0 2 0h1a2 2 0 0 1 2 2v.5H4V7a2 2 0 0 1 2-2h1a1 1 0 0 0 2 0h6Zm5 4.5H4V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCalendarOutline)
export default Memo
