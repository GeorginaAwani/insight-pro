import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPcFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M5 2.5h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-6v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H5a3 3 0 0 1-3-3v-10a3 3 0 0 1 3-3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPcFilled)
export default Memo
