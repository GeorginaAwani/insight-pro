import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChatAltOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M15.75 12a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0ZM12 13.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM5.75 12a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 .832.102 1.642.294 2.417l.256 2.044a.126.126 0 0 1 0 .036l-.344 2.058a2.125 2.125 0 0 0 1.833 2.458l5.544.693A10.02 10.02 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 1 6.015 7.752l-.061-.016-5.667-.708a.125.125 0 0 1-.108-.144l.343-2.058c.034-.203.038-.409.012-.613l-.27-2.167-.016-.06A8.017 8.017 0 0 1 4 12Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChatAltOutline)
export default Memo
