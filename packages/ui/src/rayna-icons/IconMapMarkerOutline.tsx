import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMapMarkerOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 5.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM9.5 10a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.81 3.592a7.555 7.555 0 0 1 10.545 10.372l-3.832 5.96c-1.18 1.837-3.866 1.837-5.047 0l-3.831-5.96A7.555 7.555 0 0 1 7.809 3.592Zm1.109 1.664a5.555 5.555 0 0 1 7.754 7.626l-3.832 5.96a1 1 0 0 1-1.682 0l-3.832-5.96A5.555 5.555 0 0 1 8.92 5.256Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMapMarkerOutline)
export default Memo
