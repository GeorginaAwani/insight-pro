import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCheckOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.687 7.227a1 1 0 1 0-1.374-1.454L8.353 16.125 4.687 12.66a1 1 0 1 0-1.374 1.454l4.354 4.112a1 1 0 0 0 1.373 0l11.647-11Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCheckOutline)
export default Memo
