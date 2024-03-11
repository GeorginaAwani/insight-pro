import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconShrinkAltFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm2.222-.778a1 1 0 0 1 1.414 0l2.536 2.535V4.93a1 1 0 1 1 2 0v4.243a1 1 0 0 1-1 1H4.929a1 1 0 0 1 0-2h1.828L4.222 5.636a1 1 0 0 1 0-1.414Zm9.606 14.849v-4.243a1 1 0 0 1 1-1h4.243a1 1 0 1 1 0 2h-1.828l2.535 2.536a1 1 0 0 1-1.414 1.414l-2.536-2.535v1.828a1 1 0 1 1-2 0Zm5.95-13.435a1 1 0 1 0-1.414-1.414l-2.536 2.535V4.93a1 1 0 1 0-2 0v4.243a1 1 0 0 0 1 1h4.243a1 1 0 0 0 0-2h-1.828l2.535-2.536ZM9.172 13.828H4.929a1 1 0 1 0 0 2h1.828l-2.535 2.536a1 1 0 1 0 1.414 1.414l2.536-2.535v1.828a1 1 0 1 0 2 0v-4.243a1 1 0 0 0-1-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconShrinkAltFilled)
export default Memo
