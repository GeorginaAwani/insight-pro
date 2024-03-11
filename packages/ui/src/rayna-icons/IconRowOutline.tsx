import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconRowOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 1.5A2.5 2.5 0 0 0 1.5 4v5A2.5 2.5 0 0 0 4 11.5h15A2.5 2.5 0 0 0 21.5 9V4A2.5 2.5 0 0 0 19 1.5H4ZM3.5 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V4ZM21.5 15a2.5 2.5 0 0 0-2.5-2.5H4A2.5 2.5 0 0 0 1.5 15v5A2.5 2.5 0 0 0 4 22.5h15a2.5 2.5 0 0 0 2.5-2.5v-5Zm-2.5-.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h15Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconRowOutline)
export default Memo
