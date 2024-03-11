import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMessagesFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 3.5H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2a3 3 0 0 1 1.8.6l1.21.907a2.658 2.658 0 0 1-.01-.22v-4.279C11 13.123 12.075 12 13.4 12h7.2c.136 0 .27.012.4.035V6.5a3 3 0 0 0-3-3Zm-12 5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 12a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2H7Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 15a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3.911a1.5 1.5 0 0 1-1.5 1.5c-.47 0-.927.147-1.31.42l-1.053.753a1 1 0 0 1-1.163 0l-.858-.613a3 3 0 0 0-1.745-.56H14a2 2 0 0 1-2-2V15Zm3-.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM14 18a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMessagesFilled)
export default Memo
