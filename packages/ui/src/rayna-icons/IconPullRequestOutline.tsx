import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPullRequestOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.707 3.707a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 1 0 1.414-1.414l-.26-.26A3 3 0 0 1 17 9v7.17a3.001 3.001 0 1 0 2 0V9a5 5 0 0 0-4.601-4.984l.308-.309ZM18 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM10 5a3.001 3.001 0 0 1-2 2.83v8.34a3.001 3.001 0 1 1-2 0V7.83A3.001 3.001 0 1 1 10 5ZM7 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM6 19a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPullRequestOutline)
export default Memo
