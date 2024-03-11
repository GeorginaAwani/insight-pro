import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconUndoOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2.543 8.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L5.664 7h9.086a7 7 0 1 1 0 14h-9.5a1 1 0 1 1 0-2h9.5a5 5 0 0 0 0-10H5.664l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconUndoOutline)
export default Memo
