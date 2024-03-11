import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMicrophoneFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3a6 6 0 0 0-6 6v4a6 6 0 0 0 12 0V9a6 6 0 0 0-6-6Zm-1 6a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0V9Zm3-1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
    <path
      d="M4.949 15.684a1 1 0 1 0-1.897.632c2.866 8.6 15.03 8.6 17.897 0a1 1 0 0 0-1.897-.632c-2.26 6.776-11.844 6.776-14.103 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMicrophoneFilled)
export default Memo
