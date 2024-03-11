import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBarChartVFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M8.5 12h-4A1.5 1.5 0 0 0 3 13.5v6A1.5 1.5 0 0 0 4.5 21h4a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 8.5 12ZM19.5 3h-4A1.5 1.5 0 0 0 14 4.5v15a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBarChartVFilled)
export default Memo
