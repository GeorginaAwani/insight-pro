import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBedOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2 2 2 0 0 0-2 2v7a2 2 0 0 0 1.875 1.996V20a1 1 0 1 0 2 0h14.25a1 1 0 1 0 2 0v-.004A2 2 0 0 0 23 18v-7a2 2 0 0 0-2-2H8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3Zm0 2h5v1H3V6Zm0 5h18v7H3v-7Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBedOutline)
export default Memo
