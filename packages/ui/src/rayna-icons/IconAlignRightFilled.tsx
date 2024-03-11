import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconAlignRightFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M21 4H3M21 12h-9M21 20h-9"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Memo = memo(SvgIconAlignRightFilled)
export default Memo
