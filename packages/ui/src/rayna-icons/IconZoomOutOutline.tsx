import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconZoomOutOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M7 9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H7Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 10a9 9 0 1 1 16.032 5.618l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675A9 9 0 0 1 1 10Zm9-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconZoomOutOutline)
export default Memo
