import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSignalOffOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M18 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1ZM15 9a1 1 0 1 0-2 0v12a1 1 0 1 0 2 0V9ZM10 12a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1ZM6 16a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1ZM6.121 4.707a1 1 0 1 0-1.414 1.414l.707.707-.707.707A1 1 0 1 0 6.121 8.95l.707-.707.707.707A1 1 0 0 0 8.95 7.535l-.707-.707.707-.707a1 1 0 0 0-1.414-1.414l-.708.707-.707-.707Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSignalOffOutline)
export default Memo
