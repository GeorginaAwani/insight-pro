import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconListOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M21.5 4h-14M21.5 12h-14M21.5 20h-14"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={1.25}
      cy={1.25}
      r={1.25}
      transform="matrix(-1 0 0 1 4.5 2.75)"
      fill="currentColor"
    />
    <circle
      cx={1.25}
      cy={1.25}
      r={1.25}
      transform="matrix(-1 0 0 1 4.5 10.75)"
      fill="currentColor"
    />
    <circle
      cx={1.25}
      cy={1.25}
      r={1.25}
      transform="matrix(-1 0 0 1 4.5 18.75)"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconListOutline)
export default Memo
