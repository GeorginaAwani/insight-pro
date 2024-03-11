import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCheckboxFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCheckboxFilled)
export default Memo
