import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconLampOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.895 2a2 2 0 0 0-1.988 1.78l-.777 7A2 2 0 0 0 5.117 13H11v7H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-7h5.883a2 2 0 0 0 1.988-2.22l-.778-7A2 2 0 0 0 18.105 2H5.895Zm-.778 9 .778-7h12.21l.778 7H5.117Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconLampOutline)
export default Memo
