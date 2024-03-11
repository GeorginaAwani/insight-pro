import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconLockOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M13 15a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 7A6 6 0 0 0 6 7v2a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4V7ZM8 7a4 4 0 1 1 8 0v2H8V7Zm-4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconLockOutline)
export default Memo
