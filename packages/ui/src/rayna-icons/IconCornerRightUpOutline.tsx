import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCornerRightUpOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M15.793 2.793a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L17.5 5.914V7.5c0 7.732-6.268 14-14 14a1 1 0 1 1 0-2c6.627 0 12-5.373 12-12V5.914l-2.293 2.293a1 1 0 1 1-1.414-1.414l4-4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCornerRightUpOutline)
export default Memo
