import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconScreenshotFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2 6a4 4 0 0 1 4-4h2a1 1 0 0 1 0 2H6a2 2 0 0 0-2 2v2a1 1 0 0 1-2 0V6ZM22 6a4 4 0 0 0-4-4h-2a1 1 0 1 0 0 2h2a2 2 0 0 1 2 2v2a1 1 0 1 0 2 0V6ZM6 22a4 4 0 0 1-4-4v-2a1 1 0 1 1 2 0v2a2 2 0 0 0 2 2h2a1 1 0 1 1 0 2H6ZM22 18a4 4 0 0 1-4 4h-2a1 1 0 1 1 0-2h2a2 2 0 0 0 2-2v-2a1 1 0 1 1 2 0v2ZM8.521 10.69a.967.967 0 0 0-.611-.611.322.322 0 0 1 0-.611.967.967 0 0 0 .611-.612.322.322 0 0 1 .611 0 .967.967 0 0 0 .612.612.322.322 0 0 1 0 .611.967.967 0 0 0-.612.611.322.322 0 0 1-.611 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 5.6a4 4 0 0 0-4 4v4.8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V9.6a4 4 0 0 0-4-4H9Zm-2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3.933l-1.573-1.049a2 2 0 0 0-2.748.518l-.179.255c-.784-.443-1.976-.394-2.492.344l-1.402 2.004a1.14 1.14 0 0 0-.205.704A2 2 0 0 1 7 14.4V9.6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconScreenshotFilled)
export default Memo
