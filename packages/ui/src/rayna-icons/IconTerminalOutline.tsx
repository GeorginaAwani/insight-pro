import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconTerminalOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6.152 8.47a1 1 0 0 0 .318 1.378L9.113 11.5 6.47 13.152a1 1 0 0 0 1.06 1.696l2.643-1.652a2 2 0 0 0 0-3.392L7.53 8.152a1 1 0 0 0-1.378.318ZM13 13a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7Zm4-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconTerminalOutline)
export default Memo
