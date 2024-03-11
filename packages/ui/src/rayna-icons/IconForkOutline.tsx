import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconForkOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 5a3.001 3.001 0 0 1-1.944 2.809c.14 1.004.53 1.96 1.108 2.702.723.93 1.7 1.489 2.836 1.489s2.113-.56 2.836-1.489c.577-.742.969-1.698 1.108-2.702a3.001 3.001 0 1 1 2.01.036c-.153 1.42-.689 2.8-1.54 3.894-.837 1.076-2.003 1.9-3.414 2.168v2.264a3.001 3.001 0 1 1-2 0v-2.264c-1.411-.268-2.577-1.092-3.414-2.168-.851-1.094-1.387-2.473-1.54-3.894A3.001 3.001 0 0 1 7 2a3 3 0 0 1 3 3ZM7 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm10 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-6 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconForkOutline)
export default Memo
