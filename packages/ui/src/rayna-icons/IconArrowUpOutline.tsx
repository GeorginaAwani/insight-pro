import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconArrowUpOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M11.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 5.414V21a1 1 0 1 1-2 0V5.414L8.707 7.707a1 1 0 0 1-1.414-1.414l4-4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconArrowUpOutline)
export default Memo
