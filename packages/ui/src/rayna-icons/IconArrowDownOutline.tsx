import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconArrowDownOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m16.707 17.707-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 18.586V3a1 1 0 1 1 2 0v15.586l2.293-2.293a1 1 0 0 1 1.414 1.414Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconArrowDownOutline)
export default Memo
