import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconLockOpenFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 6.75a3.75 3.75 0 1 1 7.5 0v.75a1 1 0 1 0 2 0v-.75a5.75 5.75 0 0 0-11.5 0V10a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H8V6.75ZM12 14a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconLockOpenFilled)
export default Memo
