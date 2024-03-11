import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSignInOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.5 4a1 1 0 1 0 0-2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h1.5a1 1 0 1 0 0-2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1.5Zm-.207 8.707a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L10.414 11H22a1 1 0 1 1 0 2H10.414l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSignInOutline)
export default Memo
