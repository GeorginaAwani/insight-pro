import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconTextOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M3 6V5a2 2 0 0 1 2-2h7m9 3V5a2 2 0 0 0-2-2h-7m0 0v18m2 0h-4"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Memo = memo(SvgIconTextOutline)
export default Memo
