import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconDotsHOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2.5 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM20 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconDotsHOutline)
export default Memo
