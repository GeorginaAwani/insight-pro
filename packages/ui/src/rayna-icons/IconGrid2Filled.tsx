import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconGrid2Filled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M14 14.5v5a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5h-4a1.5 1.5 0 0 0-1.5 1.5ZM3 14.5v5A1.5 1.5 0 0 0 4.5 21h4a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 8.5 13h-4A1.5 1.5 0 0 0 3 14.5ZM3 4.5v4A1.5 1.5 0 0 0 4.5 10h15A1.5 1.5 0 0 0 21 8.5v-4A1.5 1.5 0 0 0 19.5 3h-15A1.5 1.5 0 0 0 3 4.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconGrid2Filled)
export default Memo
