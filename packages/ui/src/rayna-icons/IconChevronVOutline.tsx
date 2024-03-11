import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChevronVOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12.707 3.293a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414L12 5.414l5.293 5.293a1 1 0 0 0 1.414-1.414l-6-6ZM12.707 21.707a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L12 19.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-6 6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChevronVOutline)
export default Memo
