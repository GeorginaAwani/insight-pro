import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconHistoryOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M5.8 3a1 1 0 1 0-2 0v3.6a1 1 0 0 0 1 1h3.6a1 1 0 0 0 0-2H7.199A8 8 0 1 1 4 12a1 1 0 1 0-2 0c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2a9.96 9.96 0 0 0-6.2 2.154V3Z"
      fill="currentColor"
    />
    <path
      d="M12 8.5a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2h-2v-4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconHistoryOutline)
export default Memo
