import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconArrowUpLeftFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm-.364 3.636a1 1 0 0 1 1-1h5.657a1 1 0 1 1 0 2H8.05l11.021 11.02a1 1 0 0 1-1.414 1.415L6.636 8.051v3.242a1 1 0 1 1-2 0V5.636Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconArrowUpLeftFilled)
export default Memo
