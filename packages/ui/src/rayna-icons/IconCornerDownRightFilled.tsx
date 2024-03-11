import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCornerDownRightFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm15.207 12.793a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414l2.293-2.293H15.5c-6.627 0-12-5.373-12-12a1 1 0 1 1 2 0c0 5.523 4.477 10 10 10h1.586l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCornerDownRightFilled)
export default Memo
