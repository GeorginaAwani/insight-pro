import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMapMarkerFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.318 19.383-3.832-5.96a6.555 6.555 0 1 1 11.028 0l-3.832 5.96a2 2 0 0 1-3.364 0ZM12 13.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMapMarkerFilled)
export default Memo
