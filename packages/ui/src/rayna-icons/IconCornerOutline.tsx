import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCornerOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M5 4a1 1 0 0 0-2 0v11a6 6 0 0 0 6 6h11a1 1 0 1 0 0-2H9a4 4 0 0 1-4-4V4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCornerOutline)
export default Memo
