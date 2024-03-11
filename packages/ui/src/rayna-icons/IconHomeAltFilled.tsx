import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconHomeAltFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21.862 11.654-.633 7.595A3 3 0 0 1 18.239 22H5.76a3 3 0 0 1-2.989-2.75l-.633-7.596a3 3 0 0 1 1.19-2.65L10.2 3.85a3 3 0 0 1 3.6 0l6.872 5.154a3 3 0 0 1 1.19 2.65ZM10 20.5l-.293-3.509a2.3 2.3 0 1 1 4.585 0L14 20.5h-4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconHomeAltFilled)
export default Memo
