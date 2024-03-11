import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconFilterAltFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM6 12a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM9 17a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconFilterAltFilled)
export default Memo
