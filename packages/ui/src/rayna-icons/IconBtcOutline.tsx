import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBtcOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.01 11.864a1.304 1.304 0 0 1-.01-.155V5a2 2 0 0 1 2-2h1V2a1 1 0 1 1 2 0v1h.5V2a1 1 0 1 1 2 0v1.025a5 5 0 0 1 3.245 8.288A5.002 5.002 0 0 1 14 21h-1.5v1a1 1 0 1 1-2 0v-1H10v1a1 1 0 1 1-2 0v-1H7a2 2 0 0 1-2-2v-7c0-.046.003-.092.01-.136ZM7 11h5a3 3 0 1 0 0-6H7v6Zm0 2v6h7a3 3 0 1 0 0-6H7Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBtcOutline)
export default Memo
