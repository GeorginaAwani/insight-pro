import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChatOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6 10a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 13a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2H7Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a10.02 10.02 0 0 1-2.417-.294l-5.544-.693a2.125 2.125 0 0 1-1.833-2.458l.343-2.058a.126.126 0 0 0 0-.036l-.255-2.044A10.02 10.02 0 0 1 2 12Zm10-8a8 8 0 0 0-7.752 9.985l.016.061.27 2.167c.026.204.022.41-.012.613l-.343 2.058a.125.125 0 0 0 .108.144l5.667.708.06.016A8 8 0 1 0 12 4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChatOutline)
export default Memo
