import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconRotateRightOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M17.4 4a1 1 0 1 1 2 0v3.2a1 1 0 0 1-1 1h-3.2a1 1 0 1 1 0-2h.72A7 7 0 1 0 19 12a1 1 0 1 1 2 0 9 9 0 1 1-3.6-7.2V4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconRotateRightOutline)
export default Memo
