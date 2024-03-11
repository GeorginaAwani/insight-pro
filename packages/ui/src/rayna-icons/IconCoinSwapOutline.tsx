import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCoinSwapOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M3 10a1 1 0 0 1-1-1c0-2.49.839-4.267 2.066-5.417a5.85 5.85 0 0 1 1.222-.88 1 1 0 0 1 1.16-1.597l2 1a1 1 0 0 1 .446 1.341l-1 2a1 1 0 0 1-1.788-.894l.01-.02a3.848 3.848 0 0 0-.682.509C4.66 5.767 4 6.989 4 9a1 1 0 0 1-1 1ZM5.79 16.508a2.148 2.148 0 0 1 1.36 1.358c.217.653 1.14.653 1.358 0a2.148 2.148 0 0 1 1.358-1.358c.653-.218.653-1.141 0-1.359a2.148 2.148 0 0 1-1.358-1.358c-.218-.653-1.141-.653-1.359 0a2.148 2.148 0 0 1-1.359 1.358c-.652.218-.652 1.141 0 1.359Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 8.5c0 .348.025.69.075 1.025a6.5 6.5 0 1 0 5.9 5.9A7 7 0 1 0 8.5 8.5Zm7-5a5 5 0 0 0-4.733 6.617 6.526 6.526 0 0 1 3.116 3.116A5 5 0 1 0 15.5 3.5Zm-7.5 8a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"
      fill="currentColor"
    />
    <path
      d="M22 15a1 1 0 1 0-2 0c0 2.01-.661 3.233-1.434 3.958-.215.202-.445.37-.682.51l.01-.02a1 1 0 1 0-1.788-.895l-1 2a1 1 0 0 0 .447 1.341l2 1a1 1 0 0 0 1.159-1.597c.425-.23.839-.52 1.222-.88C21.16 19.267 22 17.489 22 15Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCoinSwapOutline)
export default Memo
