import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPrinterFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M8 3v1h8V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 15V8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-1v-5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v5H5a3 3 0 0 1-3-3Zm4-7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 21v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1Zm2.5-5.5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm1 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPrinterFilled)
export default Memo
