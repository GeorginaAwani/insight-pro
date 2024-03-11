import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChevronDownOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m2.815 8.728 7.814 7.355a2 2 0 0 0 2.742 0l7.814-7.355a1 1 0 0 0-1.37-1.456L12 14.627 4.185 7.272a1 1 0 0 0-1.37 1.456Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChevronDownOutline)
export default Memo
