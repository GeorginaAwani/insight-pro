import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMinusOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M4 11a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4Z" fill="currentColor" />
  </svg>
)
const Memo = memo(SvgIconMinusOutline)
export default Memo
