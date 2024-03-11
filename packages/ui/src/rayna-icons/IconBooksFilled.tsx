import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBooksFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m8.885 3.497 1.943-.476a1 1 0 0 1 1.209.733l3.81 15.54a1 1 0 0 1-.732 1.209l-1.943.476a1 1 0 0 1-1.209-.733l-3.81-15.54a1 1 0 0 1 .732-1.209ZM6 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM20 3h-2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBooksFilled)
export default Memo
