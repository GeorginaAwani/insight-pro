import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMailAddOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 18a1 1 0 0 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 0 0 0-2h-1v-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMailAddOutline)
export default Memo
