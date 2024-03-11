import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconArrowShrinkFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm-.207 2.793a1 1 0 0 0 0 1.414L8.05 9.464H6.222a1 1 0 0 0 0 2h4.242a1 1 0 0 0 1-1V6.222a1 1 0 1 0-2 0V8.05L6.207 4.793a1 1 0 0 0-1.414 0Zm12.985 7.743h-4.242a1 1 0 0 0-1 1v4.242a1 1 0 1 0 2 0V15.95l3.257 3.257a1 1 0 0 0 1.414-1.414l-3.257-3.257h1.828a1 1 0 1 0 0-2Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconArrowShrinkFilled)
export default Memo
