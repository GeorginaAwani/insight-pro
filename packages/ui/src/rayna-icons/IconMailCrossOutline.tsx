import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMailCrossOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 17a2 2 0 0 0 2 2h10a1 1 0 1 1 0 2H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v9a1 1 0 0 1-2 0V9.477l-7.514 3.006a4 4 0 0 1-2.971 0L3 9.477V17ZM3 7v.323l8.258 3.303a2 2 0 0 0 1.485 0L21 7.323V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"
      fill="currentColor"
    />
    <path
      d="m21.415 20 .707-.707a1 1 0 0 0-1.415-1.414l-.707.707-.707-.707a1 1 0 0 0-1.414 1.414l.707.707-.707.707a1 1 0 0 0 1.414 1.414l.707-.707.707.707a1 1 0 0 0 1.415-1.414L21.415 20Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMailCrossOutline)
export default Memo
