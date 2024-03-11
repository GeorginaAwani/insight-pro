import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCardAddFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 9v8.5a3 3 0 0 0 3 3h10.401A2.987 2.987 0 0 1 15 19c0-.78.297-1.49.785-2.023A1 1 0 0 1 16 15h1.764c.55-.614 1.348-1 2.236-1 .768 0 1.47.289 2 .764V9H2Zm2 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
    <path
      d="M21 17a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCardAddFilled)
export default Memo
