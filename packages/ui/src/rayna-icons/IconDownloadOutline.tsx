import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconDownloadOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m16.707 13.707-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 14.586V3a1 1 0 1 1 2 0v11.586l2.293-2.293a1 1 0 0 1 1.414 1.414Z"
      fill="currentColor"
    />
    <path
      d="M4 17.5a1 1 0 1 0-2 0V19a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-1.5a1 1 0 1 0-2 0V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconDownloadOutline)
export default Memo
