import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconExpandOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6 2a4 4 0 0 0-4 4v2a1 1 0 0 0 2 0V6a2 2 0 0 1 2-2h2a1 1 0 0 0 0-2H6ZM18 2a4 4 0 0 1 4 4v2a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2h-2a1 1 0 1 1 0-2h2ZM2 18a4 4 0 0 0 4 4h2a1 1 0 1 0 0-2H6a2 2 0 0 1-2-2v-2a1 1 0 1 0-2 0v2ZM18 22a4 4 0 0 0 4-4v-2a1 1 0 1 0-2 0v2a2 2 0 0 1-2 2h-2a1 1 0 1 0 0 2h2Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconExpandOutline)
export default Memo
