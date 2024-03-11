import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconArrowShrinkOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M4.793 6.207a1 1 0 0 1 1.414-1.414L9.464 8.05V6.222a1 1 0 1 1 2 0v4.242a1 1 0 0 1-1 1H6.222a1 1 0 1 1 0-2H8.05L4.793 6.207ZM13.536 12.536h4.242a1 1 0 1 1 0 2H15.95l3.257 3.257a1 1 0 0 1-1.414 1.414l-3.257-3.257v1.828a1 1 0 1 1-2 0v-4.242a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconArrowShrinkOutline)
export default Memo
