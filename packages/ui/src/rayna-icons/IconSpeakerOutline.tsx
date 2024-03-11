import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSpeakerOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM12 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM12 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.86 4.8A4 4 0 0 1 7.853 1h8.293a4 4 0 0 1 3.995 3.8l.7 14a4 4 0 0 1-3.995 4.2H7.154a4 4 0 0 1-3.995-4.2l.7-14ZM7.853 3a2 2 0 0 0-1.997 1.9l-.7 14A2 2 0 0 0 7.154 21h9.693a2 2 0 0 0 1.997-2.1l-.7-14A2 2 0 0 0 16.147 3H7.854Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSpeakerOutline)
export default Memo
