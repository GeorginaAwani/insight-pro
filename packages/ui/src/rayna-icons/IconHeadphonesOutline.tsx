import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconHeadphonesOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M21 16v-3a9 9 0 1 0-18 0v3m18 0v2.412a1.588 1.588 0 0 1-3.177 0v-2.173c0-1.976 2.881-2.192 3.177-.239ZM3 16v2.412a1.588 1.588 0 0 0 3.176 0V16.25C6.176 14.28 3.31 14.055 3 16Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Memo = memo(SvgIconHeadphonesOutline)
export default Memo
