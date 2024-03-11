import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSignalOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M19 3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0V3ZM14 8a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1ZM11 13a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8ZM7 17a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSignalOutline)
export default Memo
