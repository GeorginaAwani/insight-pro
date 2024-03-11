import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconServerAltOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M14 17.5a1 1 0 0 1 1-1h4.5a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1ZM10.5 16.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 17.5V6a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v11.5a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4ZM5 4a2 2 0 0 0-2 2v8.035a3.982 3.982 0 0 1 2-.535h14c.729 0 1.412.195 2 .535V6a2 2 0 0 0-2-2H5Zm16 13.5a2 2 0 0 0-2-2H5a2 2 0 1 0 0 4h14a2 2 0 0 0 2-2Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconServerAltOutline)
export default Memo
