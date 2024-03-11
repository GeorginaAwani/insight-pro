import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSwitchVerticalOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6.293 2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L8 5.414V21a1 1 0 1 1-2 0V5.414L4.707 6.707a1 1 0 0 1-1.414-1.414l3-3ZM13.293 18.707l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L18 18.586V3a1 1 0 1 0-2 0v15.586l-1.293-1.293a1 1 0 0 0-1.414 1.414Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSwitchVerticalOutline)
export default Memo
