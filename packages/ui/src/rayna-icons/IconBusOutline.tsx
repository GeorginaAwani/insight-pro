import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBusOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7Zm1 10V6h8v8H8Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 1a3 3 0 0 0-3 3v8.634a1 1 0 0 0-1.207 1.573L3 15.414V18c0 1.306.835 2.418 2 2.83V21a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2h4a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-.17A3.001 3.001 0 0 0 21 18v-2.586l1.207-1.207A1 1 0 0 0 21 12.634V4a3 3 0 0 0-3-3H6ZM5 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBusOutline)
export default Memo
