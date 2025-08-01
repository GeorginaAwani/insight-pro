import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBookFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.667 3h10.666C18.806 3 20 4.209 20 5.7v10.286a1 1 0 0 1-.526.895.806.806 0 0 0 .005.19c.042.358.217.823.456 1.419l.029.072c.102.253.212.527.3.784.096.274.192.6.22.922.027.31.006.804-.354 1.216-.37.421-.881.516-1.276.516H7.859C5.684 22 4.011 20.16 4 18V5.7C4 4.209 5.194 3 6.667 3ZM6 17.979c0-.54.438-.979.979-.979H17.47c.002.107.01.21.022.307.079.665.367 1.382.58 1.915l.032.077c.106.265.198.493.27.701H7.859C6.884 20 6 19.148 6 17.979Zm12.89 2.02h.004-.004Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBookFilled)
export default Memo
