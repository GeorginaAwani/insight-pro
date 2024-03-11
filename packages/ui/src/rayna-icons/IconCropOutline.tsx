import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCropOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 2a1 1 0 0 0-2 0v3H3a1 1 0 0 0 0 2h2v10a2 2 0 0 0 2 2h10v3a1 1 0 1 0 2 0v-3h2a1 1 0 1 0 0-2h-2V7a2 2 0 0 0-2-2H7V2Zm0 15V7h10v10H7Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCropOutline)
export default Memo
