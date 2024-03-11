import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSwitchDiagonalOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M10.586 1.1a1 1 0 1 0 0 2h1.828L1.394 14.122a1 1 0 1 0 1.414 1.415l11.02-11.021v1.828a1 1 0 1 0 2 0V2.101a1 1 0 0 0-1-1h-4.242ZM22.607 9.879a1 1 0 0 0-1.415-1.414l-11.02 11.02v-1.828a1 1 0 0 0-2 0V21.9a1 1 0 0 0 1 1h4.242a1 1 0 1 0 0-2h-1.828l11.02-11.021Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSwitchDiagonalOutline)
export default Memo
