import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPrinterOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM9.5 15.5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1ZM10.5 17.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h1a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-1v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2H6a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h1V4Zm8 0v1H9V4h6ZM4 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H6a2 2 0 0 1-2-2V9Zm5 5h6v6H9v-6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPrinterOutline)
export default Memo
