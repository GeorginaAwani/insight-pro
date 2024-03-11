import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCloudOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.5 2a7.5 7.5 0 0 0-7.494 7.8A6 6 0 0 0 7 21h9a7 7 0 0 0 2.746-13.44A7.503 7.503 0 0 0 11.5 2ZM6 9.5a5.5 5.5 0 0 1 10.907-1.013 1 1 0 0 0 .668.766A5 5 0 0 1 16 19H7a4 4 0 0 1-1.551-7.688 1 1 0 0 0 .602-1.058A5.557 5.557 0 0 1 6 9.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCloudOutline)
export default Memo
