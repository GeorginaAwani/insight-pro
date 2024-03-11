import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconLockOpenOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 6.75a3.75 3.75 0 1 1 7.5 0v.75a1 1 0 1 0 2 0v-.75a5.75 5.75 0 0 0-11.5 0V9a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4H8V6.75ZM4 13a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconLockOpenOutline)
export default Memo
