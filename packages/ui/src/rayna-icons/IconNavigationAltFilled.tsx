import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconNavigationAltFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M18.39 3.546 4.092 8.969c-1.205.457-1.31 2.121-.172 2.727l4.983 2.65c.264.14.48.356.62.62l2.65 4.983c.606 1.138 2.27 1.033 2.727-.172L20.324 5.48c.458-1.21-.726-2.394-1.935-1.935Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconNavigationAltFilled)
export default Memo
