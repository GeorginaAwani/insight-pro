import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconArrowLeftOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2.293 12.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L5.414 11H21a1 1 0 1 1 0 2H5.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconArrowLeftOutline)
export default Memo
