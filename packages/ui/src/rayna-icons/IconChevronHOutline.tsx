import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChevronHOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M21.207 13.207a1 1 0 0 0 0-1.414l-6-6a1 1 0 1 0-1.414 1.414l5.293 5.293-5.293 5.293a1 1 0 0 0 1.414 1.414l6-6ZM2.793 13.207a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414L4.914 12.5l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChevronHOutline)
export default Memo
