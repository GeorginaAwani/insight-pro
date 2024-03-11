import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconStopwatchOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12.5 9a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2h-2V9Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 2a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v1l-.001.053a9.25 9.25 0 1 1-1.997 0C11 4.036 11 4.018 11 4V3h-1a1 1 0 0 1-1-1Zm3 4a7.25 7.25 0 1 0 0 14.5A7.25 7.25 0 0 0 12 6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconStopwatchOutline)
export default Memo
