import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconColumnOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 19.5A2.5 2.5 0 0 0 3.5 22h5a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 8.5 2h-5A2.5 2.5 0 0 0 1 4.5v15Zm2.5.5a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-5ZM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 2.5 2.5h5a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2h-5ZM14 4.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-15Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconColumnOutline)
export default Memo
