import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPcUserFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M5.25 4.4h10a3 3 0 0 1 3 3v2.609a3.5 3.5 0 0 0-2.734 5.957c-.44.37-.803.805-1.075 1.234H11.25v1.4a1 1 0 1 1 0 2h-4.2a1 1 0 1 1 0-2h2.2v-1.4h-4a3 3 0 0 1-3-3V7.4a3 3 0 0 1 3-3Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5 13.5a2.75 2.75 0 1 1 3.949 2.476c.933.359 1.653 1.089 2.053 1.765a1.7 1.7 0 0 1 .248.851c.003.322-.094.607-.24.842-.27.435-.703.695-1.041.85-.7.322-1.594.466-2.219.466-.625 0-1.518-.144-2.219-.466-.338-.155-.772-.415-1.041-.85a1.559 1.559 0 0 1-.24-.842 1.7 1.7 0 0 1 .248-.85c.4-.677 1.12-1.407 2.053-1.766A2.75 2.75 0 0 1 15.5 13.5Zm2.75-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 5c-.48 0-.99.309-1.34.736.388.166.956.264 1.34.264.384 0 .952-.098 1.34-.264-.35-.427-.86-.736-1.34-.736Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPcUserFilled)
export default Memo
