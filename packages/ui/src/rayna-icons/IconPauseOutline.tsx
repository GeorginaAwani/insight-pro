import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPauseOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H5ZM3 7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7ZM16 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-2Zm-2 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPauseOutline)
export default Memo
