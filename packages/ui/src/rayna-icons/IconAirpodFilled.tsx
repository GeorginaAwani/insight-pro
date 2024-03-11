import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconAirpodFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.5 6.148v.588c0 1.06.45 2.069 1.237 2.777l.763.687a6.042 6.042 0 0 1 2 4.49v4.81a1.5 1.5 0 0 0 3 0V7.86a4.86 4.86 0 0 0-.611-2.36l-.49-.88A3.148 3.148 0 0 0 3.5 6.147Zm17 0v.588c0 1.06-.45 2.069-1.237 2.777l-.763.687a6.042 6.042 0 0 0-2 4.49v4.81a1.5 1.5 0 0 1-3 0V7.86c0-.827.21-1.639.611-2.36l.49-.88A3.148 3.148 0 0 1 20.5 6.147Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconAirpodFilled)
export default Memo
