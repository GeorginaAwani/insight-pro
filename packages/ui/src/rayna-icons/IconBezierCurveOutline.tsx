import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBezierCurveOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M11 6a1 1 0 0 0-1 1H5.732a2 2 0 1 0 0 2h1.904A10 10 0 0 0 2 18v1a1 1 0 1 0 2 0v-1a8 8 0 1 1 16 0v1a1 1 0 1 0 2 0v-1a10 10 0 0 0-5.636-9h2.904A2 2 0 0 0 23 8a2 2 0 0 0-3.732-1H14a1 1 0 0 0-1-1h-2Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBezierCurveOutline)
export default Memo
