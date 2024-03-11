import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconHealthPlusFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M14 3h-4a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 1-1-1V4a1 1 0 0 0-1-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconHealthPlusFilled)
export default Memo
