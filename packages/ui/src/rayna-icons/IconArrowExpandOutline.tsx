import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconArrowExpandOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M20.778 4.222a1 1 0 0 0-1-1h-4.242a1 1 0 1 0 0 2h1.828L5.222 17.364v-1.829a1 1 0 1 0-2 0v4.243a1 1 0 0 0 1 1h4.242a1 1 0 1 0 0-2H6.636L18.778 6.636v1.828a1 1 0 1 0 2 0V4.222Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconArrowExpandOutline)
export default Memo
