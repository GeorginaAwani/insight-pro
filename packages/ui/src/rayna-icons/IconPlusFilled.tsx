import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPlusFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M13 4a1 1 0 1 0-2 0v7H4a1 1 0 1 0 0 2h7v7a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPlusFilled)
export default Memo
