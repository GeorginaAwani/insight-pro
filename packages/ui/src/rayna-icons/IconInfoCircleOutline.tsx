import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconInfoCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 6a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1ZM10.75 16.75a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconInfoCircleOutline)
export default Memo
