import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconUnderlineOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M18 21H6M6 3v9a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V3"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Memo = memo(SvgIconUnderlineOutline)
export default Memo
