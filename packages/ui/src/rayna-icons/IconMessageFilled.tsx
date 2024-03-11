import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMessageFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 3.5H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2a3 3 0 0 1 1.8.6l1.4 1.05a3 3 0 0 0 3.6 0l1.4-1.05a3 3 0 0 1 1.8-.6 3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3Zm-12 5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2H7Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMessageFilled)
export default Memo
