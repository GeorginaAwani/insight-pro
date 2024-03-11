import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBarChartVOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.5 2A2.5 2.5 0 0 0 13 4.5v15a2.5 2.5 0 0 0 2.5 2.5h4a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2h-4ZM15 4.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-15ZM4.5 11A2.5 2.5 0 0 0 2 13.5v6A2.5 2.5 0 0 0 4.5 22h4a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 8.5 11h-4ZM4 13.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBarChartVOutline)
export default Memo
