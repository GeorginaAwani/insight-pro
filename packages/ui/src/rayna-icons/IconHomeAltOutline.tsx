import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconHomeAltOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.4 3.05a4 4 0 0 0-4.8 0L2.727 8.204a4 4 0 0 0-1.586 3.533l.633 7.595A4 4 0 0 0 5.76 23h12.48a4 4 0 0 0 3.985-3.668l.633-7.595a4 4 0 0 0-1.586-3.533L14.4 3.05Zm-3.6 1.6a2 2 0 0 1 2.4 0l6.872 5.154a2 2 0 0 1 .793 1.766l-.633 7.596A2 2 0 0 1 18.24 21h-3.153l.203-2.426a3.3 3.3 0 1 0-6.578 0L8.913 21H5.76a2 2 0 0 1-1.993-1.834l-.633-7.596a2 2 0 0 1 .793-1.766L10.8 4.65Zm2.495 13.758L13.08 21h-2.16l-.215-2.592a1.3 1.3 0 1 1 2.591 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconHomeAltOutline)
export default Memo
