import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCalendarCrossFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M8 1a1 1 0 0 1 1 1v1.5H7V2a1 1 0 0 1 1-1ZM15 4H9v1a1 1 0 0 1-2 0V4H6a3 3 0 0 0-3 3v.5h18V7a3 3 0 0 0-3-3h-1v1a1 1 0 1 1-2 0V4ZM3 9.5V18a3 3 0 0 0 3 3h9.614c.048-.346.157-.685.325-1A3.001 3.001 0 0 1 20 15.94a2.989 2.989 0 0 1 1-.326V9.5H3ZM17 2a1 1 0 1 0-2 0v1.5h2V2Z"
      fill="currentColor"
    />
    <path
      d="M21.95 19.121a1 1 0 0 0-1.415-1.414l-.707.707-.707-.707a1 1 0 0 0-1.414 1.414l.707.707-.707.707a1 1 0 0 0 1.414 1.415l.707-.707.707.707a1 1 0 1 0 1.415-1.415l-.707-.707.707-.707Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCalendarCrossFilled)
export default Memo
