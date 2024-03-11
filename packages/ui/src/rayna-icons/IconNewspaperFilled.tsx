import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconNewspaperFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M9 8H7v2h2V8Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12V5a2 2 0 0 0-2-2ZM5 17a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm1-4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H6Zm6-2a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1Zm1-4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1ZM5 8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8Z"
      fill="currentColor"
    />
    <path
      d="M18 21h2.4c.884 0 1.6-.895 1.6-2v-2c0-1.105-.716-2-1.6-2H18v6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconNewspaperFilled)
export default Memo
