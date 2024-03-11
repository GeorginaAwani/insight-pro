import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBarChartHFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 8.5v-4A1.5 1.5 0 0 0 10.5 3h-6A1.5 1.5 0 0 0 3 4.5v4A1.5 1.5 0 0 0 4.5 10h6A1.5 1.5 0 0 0 12 8.5ZM21 19.5v-4a1.5 1.5 0 0 0-1.5-1.5h-15A1.5 1.5 0 0 0 3 15.5v4A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBarChartHFilled)
export default Memo
