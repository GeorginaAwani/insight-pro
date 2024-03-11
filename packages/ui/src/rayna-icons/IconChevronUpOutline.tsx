import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChevronUpOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M10.63 7.917a2 2 0 0 1 2.74 0l7.815 7.355a1 1 0 0 1-1.37 1.456L12 9.373l-7.815 7.355a1 1 0 1 1-1.37-1.456l7.814-7.355Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChevronUpOutline)
export default Memo
