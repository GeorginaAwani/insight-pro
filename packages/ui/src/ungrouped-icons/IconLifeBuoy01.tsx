import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconLifeBuoy01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M9.136 9.136 4.93 4.93m0 14.142 4.239-4.239m5.693.032 4.207 4.207m0-14.142-4.24 4.24M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-6 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Memo = memo(SvgIconLifeBuoy01)
export default Memo
