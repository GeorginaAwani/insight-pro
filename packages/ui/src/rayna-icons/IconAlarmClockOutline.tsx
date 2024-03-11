import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconAlarmClockOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M1.806 4.53A1 1 0 1 0 3.22 5.945L5.695 3.47A1 1 0 0 0 4.28 2.056L1.806 4.53ZM12 9a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2h-2V9Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
      fill="currentColor"
    />
    <path
      d="M18.293 2.293a1 1 0 0 1 1.414 0l2.475 2.475a1 1 0 0 1-1.414 1.414l-2.475-2.475a1 1 0 0 1 0-1.414Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconAlarmClockOutline)
export default Memo
