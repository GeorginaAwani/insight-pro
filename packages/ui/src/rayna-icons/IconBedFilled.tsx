import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBedFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M3 5h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1ZM3 10h18a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1 1 1 0 1 1-2 0H5a1 1 0 1 1-2 0 1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBedFilled)
export default Memo
