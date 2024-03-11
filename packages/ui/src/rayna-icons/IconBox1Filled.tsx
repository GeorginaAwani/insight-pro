import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBox1Filled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M5 4h14a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2ZM4 10.5v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7H4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBox1Filled)
export default Memo
