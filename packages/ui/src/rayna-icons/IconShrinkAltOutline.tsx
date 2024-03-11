import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconShrinkAltOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M20.778 4.636a1 1 0 0 0-1.414-1.414l-2.536 2.535V3.93a1 1 0 1 0-2 0v4.243a1 1 0 0 0 1 1h4.243a1 1 0 0 0 0-2h-1.828l2.535-2.536ZM9.172 15.829a1 1 0 0 0-1-1H3.929a1 1 0 1 0 0 2h1.828l-2.535 2.535a1 1 0 1 0 1.414 1.414l2.536-2.535v1.828a1 1 0 1 0 2 0v-4.243ZM4.636 3.222a1 1 0 0 0-1.414 1.414l2.535 2.536H3.93a1 1 0 0 0 0 2h4.243a1 1 0 0 0 1-1V3.929a1 1 0 0 0-2 0v1.828L4.636 3.222ZM15.828 14.829a1 1 0 0 0-1 1v4.242a1 1 0 1 0 2 0v-1.828l2.536 2.535a1 1 0 1 0 1.414-1.414l-2.535-2.536h1.828a1 1 0 1 0 0-2h-4.243Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconShrinkAltOutline)
export default Memo
