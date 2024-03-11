import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCandlesVFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6 3v3h-.5A1.5 1.5 0 0 0 4 7.5v3A1.5 1.5 0 0 0 5.5 12H6v9a1 1 0 1 0 2 0v-9h.5a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 8.5 6H8V3a1 1 0 0 0-2 0ZM18 9h.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5H18v3a1 1 0 1 1-2 0v-3h-.5a1.5 1.5 0 0 1-1.5-1.5v-6A1.5 1.5 0 0 1 15.5 9h.5V3a1 1 0 1 1 2 0v6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCandlesVFilled)
export default Memo
