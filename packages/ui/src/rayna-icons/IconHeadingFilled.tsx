import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconHeadingFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M5.6 3v9m0 9v-9m12.8 9v-9m0-9v9m0 0H5.6m1.6-9H4m16 0h-3.2M7.2 21H4m15.6 0h-3.2"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Memo = memo(SvgIconHeadingFilled)
export default Memo
