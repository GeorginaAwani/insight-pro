import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconHealthPlusOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 2a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4V4a2 2 0 0 0-2-2h-4Zm-2 8a2 2 0 0 0 2-2V4h4v4a2 2 0 0 0 2 2h4v4h-4a2 2 0 0 0-2 2v4h-4v-4a2 2 0 0 0-2-2H4v-4h4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconHealthPlusOutline)
export default Memo
