import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCornerRightDownOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M15.793 21.207a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L17.5 18.086V16.5c0-7.732-6.268-14-14-14a1 1 0 0 0 0 2c6.627 0 12 5.373 12 12v1.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l4 4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCornerRightDownOutline)
export default Memo
