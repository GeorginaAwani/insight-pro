import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconTruckFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 4a3 3 0 0 1 3 3v11h-4a4 4 0 0 0-8 0 1 1 0 0 1-1-1V7a3 3 0 0 1 3-3h7ZM16 15.354V9.5h2.05a3 3 0 0 1 2.742 1.782l.95 2.136A3 3 0 0 1 22 14.637v.717A3.99 3.99 0 0 0 19 14a3.99 3.99 0 0 0-3 1.354Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM19 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconTruckFilled)
export default Memo
