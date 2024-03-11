import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCoinsAltOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M7.32 18.038a2.148 2.148 0 0 0-1.358-1.359c-.653-.217-.653-1.14 0-1.358a2.148 2.148 0 0 0 1.359-1.359c.217-.653 1.14-.653 1.358 0a2.148 2.148 0 0 0 1.359 1.359c.653.217.653 1.14 0 1.358a2.148 2.148 0 0 0-1.359 1.359c-.217.653-1.14.653-1.358 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.575 9.525a7 7 0 1 1 5.9 5.9 6.5 6.5 0 1 1-5.9-5.9ZM10.5 8.5a5 5 0 1 1 3.383 4.733 6.526 6.526 0 0 0-3.116-3.116A4.993 4.993 0 0 1 10.5 8.5Zm-2.5 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCoinsAltOutline)
export default Memo
