import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBoxFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M8.534 3.525c1.217-.383 2.3-.696 2.919-.872.36-.102.731-.098 1.09.013 1.658.511 6.67 2.094 8.644 3.152l-3.493 1.47-9.16-3.763ZM6.346 4.248C4.89 4.755 3.51 5.3 2.71 5.78a.758.758 0 0 1 .08.029L12 9.686l3.745-1.577-9.4-3.861ZM1.892 6.94c-.235 1.66-.053 6.85.05 9.28.033.782.523 1.466 1.248 1.756l8.067 3.227.023.01a.75.75 0 0 1-.03-.213V10.998L2.207 7.191a.746.746 0 0 1-.316-.25ZM12.72 21.212l.022-.009 8.067-3.227a1.982 1.982 0 0 0 1.248-1.755c.103-2.43.285-7.622.05-9.28a.746.746 0 0 1-.316.25l-9.042 3.807V21a.75.75 0 0 1-.03.212Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBoxFilled)
export default Memo
