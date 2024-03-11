import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBooksOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 8.285V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h2a2 2 0 0 1 1.744 1.02 1.99 1.99 0 0 1 .903-.494l1.942-.476a2 2 0 0 1 2.42 1.466L16 15.716V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2a2 2 0 0 1-1.744-1.02 1.99 1.99 0 0 1-.903.494l-1.942.476a2 2 0 0 1-2.42-1.466L8 8.284Zm1.123-3.817 1.943-.476 3.81 15.54-1.942.476-3.81-15.54ZM6 4H4v16h2V4Zm14 0h-2v16h2V4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBooksOutline)
export default Memo
