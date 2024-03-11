import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconArrowExpandFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm14.571 3.621a1 1 0 0 0-1-1h-4.243a1 1 0 1 0 0 2h1.829L6.429 16.35v-1.828a1 1 0 1 0-2 0v4.242a1 1 0 0 0 1 1h4.243a1 1 0 0 0 0-2H7.843l9.728-9.727v1.828a1 1 0 0 0 2 0V5.621Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconArrowExpandFilled)
export default Memo
