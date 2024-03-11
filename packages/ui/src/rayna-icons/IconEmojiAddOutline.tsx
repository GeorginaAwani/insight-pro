import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconEmojiAddOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 4a8 8 0 1 0 7.89 6.665 1 1 0 0 1 1.972-.33c.09.542.138 1.098.138 1.665 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c1.595 0 3.105.374 4.445 1.04a1 1 0 1 1-.89 1.791A7.963 7.963 0 0 0 12 4Z"
      fill="currentColor"
    />
    <path
      d="M20 3a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0V7h-1a1 1 0 1 1 0-2h1V4a1 1 0 0 1 1-1ZM9.293 15.293a1 1 0 0 1 1.414 0 1.829 1.829 0 0 0 2.586 0 1 1 0 0 1 1.414 1.414 3.828 3.828 0 0 1-5.414 0 1 1 0 0 1 0-1.414ZM10.2 9.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.3 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconEmojiAddOutline)
export default Memo
