import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconZoomInFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.906 16.32a8 8 0 1 1 1.414-1.414l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387ZM10 6a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H7a1 1 0 1 1 0-2h2V7a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconZoomInFilled)
export default Memo
