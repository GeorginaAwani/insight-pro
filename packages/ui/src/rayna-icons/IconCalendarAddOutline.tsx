import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCalendarAddOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 2a1 1 0 0 0-2 0v1H6a4 4 0 0 0-4 4v11a4 4 0 0 0 4 4h9a1 1 0 1 0 0-2H6a2 2 0 0 1-2-2V9.5h16V15a1 1 0 1 0 2 0V7a4 4 0 0 0-4-4h-1V2a1 1 0 1 0-2 0v1H9V2Zm7 4a1 1 0 0 1-1-1H9a1 1 0 0 1-2 0H6a2 2 0 0 0-2 2v.5h16V7a2 2 0 0 0-2-2h-1a1 1 0 0 1-1 1Z"
      fill="currentColor"
    />
    <path
      d="M21 18a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCalendarAddOutline)
export default Memo
