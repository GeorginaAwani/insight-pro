import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconRedoOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M21.457 8.707a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L18.336 7H9.25a7 7 0 1 0 0 14h9.5a1 1 0 1 0 0-2h-9.5a5 5 0 0 1 0-10h9.086l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconRedoOutline)
export default Memo
