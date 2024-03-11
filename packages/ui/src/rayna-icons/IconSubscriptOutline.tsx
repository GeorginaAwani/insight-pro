import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSubscriptOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m3 5 5.606 8.154m0 0L14 21m-5.394-7.846L14 5m-5.394 8.154L3.416 21M17 21v-2a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v2"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Memo = memo(SvgIconSubscriptOutline)
export default Memo
