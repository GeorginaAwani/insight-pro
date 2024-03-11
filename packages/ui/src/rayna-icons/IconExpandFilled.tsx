import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconExpandFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm1.5 1.5a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0v-2Zm14-3a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0v-2a1 1 0 0 0-1-1h-3a1 1 0 1 1 0-2h3Zm-14 14a3 3 0 0 0 3 3h2a1 1 0 1 0 0-2h-2a1 1 0 0 1-1-1v-3a1 1 0 1 0-2 0v3Zm14 3a3 3 0 0 0 3-3v-3a1 1 0 1 0-2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 0 0 2h3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconExpandFilled)
export default Memo
