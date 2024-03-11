import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSignOutFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6 3h1.5v7.063a2 2 0 0 0 0 3.874V21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"
      fill="currentColor"
    />
    <path
      d="M22.707 12.707a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L19.586 11H8a1 1 0 1 0 0 2h11.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSignOutFilled)
export default Memo
