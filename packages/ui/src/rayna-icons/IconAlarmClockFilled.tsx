import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconAlarmClockFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M1.806 4.53A1 1 0 1 0 3.22 5.945L5.695 3.47A1 1 0 0 0 4.28 2.056L1.806 4.53ZM18.293 2.293a1 1 0 0 1 1.414 0l2.475 2.475a1 1 0 0 1-1.414 1.414l-2.475-2.475a1 1 0 0 1 0-1.414Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-12a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2h-2V9Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconAlarmClockFilled)
export default Memo
