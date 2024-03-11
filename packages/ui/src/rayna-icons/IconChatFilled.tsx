import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChatFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 21a9 9 0 1 0-8.72-6.767l.262 2.104c.014.108.011.218-.006.325l-.343 2.057c-.105.63.335 1.222.97 1.301l5.604.7c.714.183 1.462.28 2.233.28ZM6 10a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2H7Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChatFilled)
export default Memo
