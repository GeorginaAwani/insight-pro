import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconDotsHFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM20 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconDotsHFilled)
export default Memo
