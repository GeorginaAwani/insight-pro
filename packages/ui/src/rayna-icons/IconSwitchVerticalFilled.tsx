import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSwitchVerticalFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm14.293 15.207-3-3a1 1 0 0 1 1.414-1.414L16 17.086V4.5a1 1 0 1 1 2 0v12.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0Zm-10-16.414a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L8 6.914V19.5a1 1 0 1 1-2 0V6.914L4.707 8.207a1 1 0 0 1-1.414-1.414l3-3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSwitchVerticalFilled)
export default Memo
