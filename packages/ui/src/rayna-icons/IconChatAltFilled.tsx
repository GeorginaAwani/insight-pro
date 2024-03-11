import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChatAltFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 12a9 9 0 0 1-11.233 8.72l-5.604-.7a1.125 1.125 0 0 1-.97-1.3l.343-2.058c.017-.107.02-.217.006-.325l-.263-2.104A9 9 0 1 1 21 12Zm-5.25 0a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0ZM12 13.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM5.75 12a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChatAltFilled)
export default Memo
