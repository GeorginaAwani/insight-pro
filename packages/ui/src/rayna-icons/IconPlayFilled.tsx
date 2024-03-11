import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPlayFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M8.764 4.315 18.87 9.366c2.172 1.085 2.172 4.183 0 5.268L8.764 19.685c-1.96.98-4.264-.444-4.264-2.634V6.95c0-2.19 2.305-3.613 4.264-2.634Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPlayFilled)
export default Memo
