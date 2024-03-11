import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconGpsOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1a1 1 0 0 1 1 1v1.055A9.004 9.004 0 0 1 20.945 11H22a1 1 0 1 1 0 2h-1.055A9.004 9.004 0 0 1 13 20.945V22a1 1 0 1 1-2 0v-1.055A9.004 9.004 0 0 1 3.055 13H2a1 1 0 1 1 0-2h1.055A9.004 9.004 0 0 1 11 3.055V2a1 1 0 0 1 1-1Zm7 11a7 7 0 1 0-14 0 7 7 0 0 0 14 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconGpsOutline)
export default Memo
