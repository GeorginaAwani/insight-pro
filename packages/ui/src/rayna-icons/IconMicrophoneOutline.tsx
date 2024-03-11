import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMicrophoneOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M10 8a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1ZM15 9a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0V9Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2a7 7 0 0 0-7 7v4a7 7 0 0 0 14 0V9a7 7 0 0 0-7-7ZM7 9a5 5 0 0 1 10 0v4a5 5 0 0 1-10 0V9Z"
      fill="currentColor"
    />
    <path
      d="M4.949 15.684a1 1 0 1 0-1.897.632c2.866 8.6 15.03 8.6 17.897 0a1 1 0 0 0-1.897-.632c-2.26 6.776-11.844 6.776-14.103 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMicrophoneOutline)
export default Memo
