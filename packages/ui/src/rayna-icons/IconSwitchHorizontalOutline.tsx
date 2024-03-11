import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSwitchHorizontalOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M21.707 7.707a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L18.586 6H3a1 1 0 0 0 0 2h15.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3ZM2.293 17.707a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L5.414 16H21a1 1 0 1 1 0 2H5.414l1.293 1.293a1 1 0 1 1-1.414 1.414l-3-3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSwitchHorizontalOutline)
export default Memo
