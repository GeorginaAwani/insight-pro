import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMessageOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6 8.5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 11.5a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2H7Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m15.4 19.95 1.4-1.05a2 2 0 0 1 1.2-.4 4 4 0 0 0 4-4v-8a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h2a2 2 0 0 1 1.2.4l1.4 1.05a4 4 0 0 0 4.8 0ZM18 16.5a4 4 0 0 0-2.4.8l-1.4 1.05a2 2 0 0 1-2.4 0l-1.4-1.05a4 4 0 0 0-2.4-.8H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMessageOutline)
export default Memo
