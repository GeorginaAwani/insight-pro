import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCornerRightDownFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm9.793 18.207a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L16.5 17.086V15.5c0-6.627-5.373-12-12-12a1 1 0 1 0 0 2c5.523 0 10 4.477 10 10v1.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l4 4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCornerRightDownFilled)
export default Memo
