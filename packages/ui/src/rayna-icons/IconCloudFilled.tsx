import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCloudFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M7 20a5 5 0 0 1-1.94-9.61 6.5 6.5 0 0 1 12.83-2.086A6 6 0 0 1 16 20H7Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCloudFilled)
export default Memo
