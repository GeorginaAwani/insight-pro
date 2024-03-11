import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCandlesVOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 3v2h.5A2.5 2.5 0 0 1 11 7.5v3A2.5 2.5 0 0 1 8.5 13H8v8a1 1 0 1 1-2 0v-8h-.5A2.5 2.5 0 0 1 3 10.5v-3A2.5 2.5 0 0 1 5.5 5H6V3a1 1 0 0 1 2 0ZM5.5 7h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5ZM16 19v2a1 1 0 1 0 2 0v-2h.5a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 18.5 8H18V3a1 1 0 1 0-2 0v5h-.5a2.5 2.5 0 0 0-2.5 2.5v6a2.5 2.5 0 0 0 2.5 2.5h.5Zm-.5-9a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCandlesVOutline)
export default Memo
