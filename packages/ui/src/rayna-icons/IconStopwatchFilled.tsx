import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconStopwatchFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 1a1 1 0 0 0 0 2h1v2.06a8.251 8.251 0 0 0 1 16.44 8.25 8.25 0 0 0 1-16.44V3h1a1 1 0 1 0 0-2h-4Zm1.5 7a1 1 0 0 1 1 1v4h2a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconStopwatchFilled)
export default Memo
