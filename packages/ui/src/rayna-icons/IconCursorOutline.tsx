import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCursorOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.51 2.497a2.15 2.15 0 0 0-2.427-.223c-.706.39-1.24 1.217-1.042 2.212l3.16 15.829c.377 1.89 2.876 2.267 3.886.724l2.687-4.103c.015-.022.054-.053.115-.055l5.054-.177c1.857-.065 2.855-2.387 1.3-3.673L7.51 2.497ZM6.002 4.092A.107.107 0 0 1 6 4.076v-.005l.001-.003a.125.125 0 0 1 .05-.044A.185.185 0 0 1 6.15 4c.022.002.05.008.085.038L18.97 14.572a.132.132 0 0 1 .028.03l.003.005c0 .002.002.012-.005.03a.097.097 0 0 1-.032.043c-.01.008-.035.023-.09.025l-5.054.177a2.141 2.141 0 0 0-1.718.959l-2.687 4.103a.105.105 0 0 1-.053.045.19.19 0 0 1-.1.008.164.164 0 0 1-.08-.035c-.008-.007-.015-.014-.02-.038L6.003 4.095v-.003Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCursorOutline)
export default Memo
