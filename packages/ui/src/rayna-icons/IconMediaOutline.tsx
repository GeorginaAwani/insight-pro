import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMediaOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.894 7.83A2 2 0 0 0 8 9.617v4.764a2 2 0 0 0 2.894 1.789l4.764-2.382c1.475-.737 1.475-2.84 0-3.578L10.894 7.83ZM10 9.617 14.764 12 10 14.382V9.618Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2.5a4 4 0 0 0-4 4v11a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-11a4 4 0 0 0-4-4H5Zm-2 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-11Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMediaOutline)
export default Memo
