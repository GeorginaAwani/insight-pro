import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSimOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M8.5 6a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-6Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V8.8a4 4 0 0 0-1.264-2.918l-2.987-2.8A4 4 0 0 0 14.014 2H7ZM5 6a2 2 0 0 1 2-2h7.014a2 2 0 0 1 1.368.54l2.986 2.8A2 2 0 0 1 19 8.8V18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSimOutline)
export default Memo
