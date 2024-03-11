import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconArrowDownLeftOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M4.636 18.364a1 1 0 0 0 1 1h5.657a1 1 0 0 0 0-2H8.05l11.021-11.02a1 1 0 1 0-1.414-1.415l-11.02 11.02v-3.242a1 1 0 1 0-2 0v5.657Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconArrowDownLeftOutline)
export default Memo
