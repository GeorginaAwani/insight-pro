import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCornerDownRightOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M21.207 15.793a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414l2.293-2.293H16.5c-7.732 0-14-6.268-14-14a1 1 0 1 1 2 0c0 6.627 5.373 12 12 12h1.586l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCornerDownRightOutline)
export default Memo
