import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconEmojiOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M8.7 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.8 9.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM10.707 15.293a1 1 0 0 0-1.414 1.414 3.828 3.828 0 0 0 5.414 0 1 1 0 0 0-1.414-1.414 1.829 1.829 0 0 1-2.586 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconEmojiOutline)
export default Memo
