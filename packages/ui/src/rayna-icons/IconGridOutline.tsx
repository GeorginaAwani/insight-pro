import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconGridOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 11.5A2.5 2.5 0 0 1 1.5 9V4A2.5 2.5 0 0 1 4 1.5h5A2.5 2.5 0 0 1 11.5 4v5A2.5 2.5 0 0 1 9 11.5H4ZM3.5 9a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v5ZM1.5 20A2.5 2.5 0 0 0 4 22.5h5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 9 12.5H4A2.5 2.5 0 0 0 1.5 15v5Zm2.5.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H4ZM12.5 20a2.5 2.5 0 0 0 2.5 2.5h5a2.5 2.5 0 0 0 2.5-2.5v-5a2.5 2.5 0 0 0-2.5-2.5h-5a2.5 2.5 0 0 0-2.5 2.5v5Zm2.5.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5ZM12.5 9a2.5 2.5 0 0 0 2.5 2.5h5A2.5 2.5 0 0 0 22.5 9V4A2.5 2.5 0 0 0 20 1.5h-5A2.5 2.5 0 0 0 12.5 4v5Zm2.5.5a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconGridOutline)
export default Memo
