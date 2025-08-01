import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPcOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 1.5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h6v1H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-1h6a4 4 0 0 0 4-4v-10a4 4 0 0 0-4-4H5Zm14 16a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPcOutline)
export default Memo
