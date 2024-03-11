import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPauseFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M5 4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3ZM16 4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPauseFilled)
export default Memo
