import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconEmojiAddFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3c1.77 0 3.419.51 4.81 1.392A2 2 0 0 0 18 8a2 2 0 0 0 2.743 1.857A9 9 0 1 1 12 3Zm-1.293 12.293a1 1 0 0 0-1.414 1.414 3.828 3.828 0 0 0 5.414 0 1 1 0 0 0-1.414-1.414 1.829 1.829 0 0 1-2.586 0ZM10.2 9.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.3 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
      fill="currentColor"
    />
    <path
      d="M21 4a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0V7h1a1 1 0 1 0 0-2h-1V4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconEmojiAddFilled)
export default Memo
