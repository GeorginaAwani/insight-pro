import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconUserCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <g
      clipPath="url(#icon-user-circle-outline_svg__a)"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor">
      <path d="M12 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM9 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
      <path d="M24 12c0 6.627-5.373 12-12 12h-.016C5.364 23.991 0 18.622 0 12 0 5.373 5.373 0 12 0s12 5.373 12 12ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.958 9.958 0 0 1-2.232 6.298 3.27 3.27 0 0 0-.14-.284C18.27 15.577 15.451 13 11.996 13s-6.274 2.577-7.63 5.014a3.176 3.176 0 0 0-.139.28A9.958 9.958 0 0 1 2 12Zm5.468 8.83C8.828 21.558 10.71 22 11.99 22h.007c1.285 0 3.177-.434 4.54-1.156.687-.364 1.127-.742 1.332-1.07.159-.255.186-.474.01-.788C16.722 16.905 14.455 15 11.998 15s-4.724 1.905-5.883 3.986c-.166.298-.143.51.02.769.206.329.648.71 1.334 1.076Z" />
    </g>
    <defs>
      <clipPath id="icon-user-circle-outline_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const Memo = memo(SvgIconUserCircleOutline)
export default Memo
