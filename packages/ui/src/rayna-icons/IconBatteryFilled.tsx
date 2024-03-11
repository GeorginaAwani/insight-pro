import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBatteryFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 6h10a3 3 0 0 1 3 3v1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 14v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Zm.5 2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Zm4 1a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V9Zm2-1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Zm4 1a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V9Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBatteryFilled)
export default Memo
