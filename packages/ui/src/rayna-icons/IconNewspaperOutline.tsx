import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconNewspaperOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6 16a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H6ZM5 14a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1ZM13 10a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1ZM12 8a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H7Zm0 2h2v2H7V8Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3H5Zm15 18h-2v-4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1Zm-4 0H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v15Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconNewspaperOutline)
export default Memo
