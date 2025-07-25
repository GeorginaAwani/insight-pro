import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSearchOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 2a9 9 0 1 0 5.618 16.032l3.675 3.675a1 1 0 0 0 1.414-1.414l-3.675-3.675A9 9 0 0 0 11 2Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSearchOutline)
export default Memo
