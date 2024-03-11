import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconShrinkOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6 10a4 4 0 0 0 4-4V4a1 1 0 0 0-2 0v2a2 2 0 0 1-2 2H4a1 1 0 0 0 0 2h2ZM18 10a4 4 0 0 1-4-4V4a1 1 0 1 1 2 0v2a2 2 0 0 0 2 2h2a1 1 0 1 1 0 2h-2ZM10 18a4 4 0 0 0-4-4H4a1 1 0 1 0 0 2h2a2 2 0 0 1 2 2v2a1 1 0 1 0 2 0v-2ZM18 14a4 4 0 0 0-4 4v2a1 1 0 1 0 2 0v-2a2 2 0 0 1 2-2h2a1 1 0 1 0 0-2h-2Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconShrinkOutline)
export default Memo
