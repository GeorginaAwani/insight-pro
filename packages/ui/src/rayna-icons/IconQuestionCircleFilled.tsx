import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconQuestionCircleFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-8.86-1.855a.665.665 0 1 0-.869-1.002l-.564.564a1 1 0 0 1-1.414-1.414l.564-.564a2.665 2.665 0 1 1 3.483 4.016l-.048.036a.729.729 0 0 0-.292.583v.136a1 1 0 1 1-2 0v-.136c0-.859.404-1.667 1.092-2.183l.048-.036ZM11 15.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconQuestionCircleFilled)
export default Memo
