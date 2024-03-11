import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCardInFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M5 3.5h14a3 3 0 0 1 3 3V7H2v-.5a3 3 0 0 1 3-3Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 9v8.5a3 3 0 0 0 3 3h9.764l-.006-.007a3 3 0 0 1 0-3.986l.264-.297A1 1 0 0 1 16 15h.097a3 3 0 0 1 4.835.5H22V9H2Zm2 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
    <path
      d="M16.253 19.164a1 1 0 0 1 0-1.328l1.333-1.5A1 1 0 0 1 19.2 17.5H22a1 1 0 1 1 0 2h-2.8a1 1 0 0 1-1.614 1.164l-1.333-1.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCardInFilled)
export default Memo
