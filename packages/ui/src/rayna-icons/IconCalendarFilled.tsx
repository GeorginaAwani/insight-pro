import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCalendarFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M8 1a1 1 0 0 1 1 1v1.5H7V2a1 1 0 0 1 1-1ZM15 4H9v1a1 1 0 0 1-2 0V4H6a3 3 0 0 0-3 3v.5h18V7a3 3 0 0 0-3-3h-1v1a1 1 0 1 1-2 0V4ZM3 9.5V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9.5H3ZM17 2a1 1 0 1 0-2 0v1.5h2V2Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCalendarFilled)
export default Memo
