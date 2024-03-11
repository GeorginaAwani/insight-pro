import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconProcessorOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.7 7.5a2.2 2.2 0 0 0-2.2 2.2v4.6a2.2 2.2 0 0 0 2.2 2.2h6.6a2.2 2.2 0 0 0 2.2-2.2V9.7a2.2 2.2 0 0 0-2.2-2.2H8.7Zm-.2 2.2c0-.11.09-.2.2-.2h6.6c.11 0 .2.09.2.2v4.6a.2.2 0 0 1-.2.2H8.7a.2.2 0 0 1-.2-.2V9.7Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5 2a1 1 0 0 1 1 1v1.03a4.004 4.004 0 0 1 3.21 2.47H22a1 1 0 1 1 0 2h-1v1h1a1 1 0 1 1 0 2h-1v1h1a1 1 0 1 1 0 2h-1v1h1a1 1 0 1 1 0 2h-1.29A4.009 4.009 0 0 1 18 19.874V21a1 1 0 1 1-2 0v-1h-1v1a1 1 0 1 1-2 0v-1h-1v1a1 1 0 1 1-2 0v-1H9v1a1 1 0 1 1-2 0v-1a4.001 4.001 0 0 1-3.71-2.5H2a1 1 0 1 1 0-2h1v-1H2a1 1 0 1 1 0-2h1v-1H2a1 1 0 1 1 0-2h1v-1H2a1 1 0 0 1 0-2h1.29A4.004 4.004 0 0 1 6.5 4.031V3a1 1 0 0 1 2 0v1h1V3a1 1 0 1 1 2 0v1h1V3a1 1 0 1 1 2 0v1h1V3a1 1 0 0 1 1-1ZM19 16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconProcessorOutline)
export default Memo
