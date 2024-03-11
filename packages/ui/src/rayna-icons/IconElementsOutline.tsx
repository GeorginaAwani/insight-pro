import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconElementsOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 11.5A2.5 2.5 0 0 1 1.5 9V4A2.5 2.5 0 0 1 4 1.5h5A2.5 2.5 0 0 1 11.5 4v5A2.5 2.5 0 0 1 9 11.5H4ZM3.5 9a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v5ZM7.676 13.194a2.37 2.37 0 0 0-3.352 0l-2.63 2.63a2.37 2.37 0 0 0 0 3.352l2.63 2.63a2.37 2.37 0 0 0 3.352 0l2.63-2.63a2.37 2.37 0 0 0 0-3.352l-2.63-2.63Zm-1.938 1.414a.37.37 0 0 1 .524 0l2.63 2.63a.37.37 0 0 1 0 .524l-2.63 2.63a.37.37 0 0 1-.524 0l-2.63-2.63a.37.37 0 0 1 0-.524l2.63-2.63ZM12.5 20a2.5 2.5 0 0 0 2.5 2.5h5a2.5 2.5 0 0 0 2.5-2.5v-5a2.5 2.5 0 0 0-2.5-2.5h-5a2.5 2.5 0 0 0-2.5 2.5v5Zm2.5.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5ZM12.5 6.5a5 5 0 1 0 10 0 5 5 0 0 0-10 0Zm5-3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconElementsOutline)
export default Memo
