import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBatteryEmptyFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6 6h10.457a3 3 0 0 1 3 3A2.543 2.543 0 0 1 22 11.543v.914A2.543 2.543 0 0 1 19.457 15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBatteryEmptyFilled)
export default Memo
