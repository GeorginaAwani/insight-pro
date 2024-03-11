import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBuilding1Outline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M16 14a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM15 12a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1ZM11 14a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM10 12a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.978 4.4a2 2 0 0 0-1.963.011L5.008 7.844A2 2 0 0 0 4 9.58V19a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2V9.566a2 2 0 0 0-.971-1.715L17.5 6.934V6a1 1 0 0 0-1.982-.19l-2.54-1.41ZM13 19v-2a1 1 0 1 0-2 0v2H6V9.58l6.007-3.432L16 8.366l2 1.2V19h-5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBuilding1Outline)
export default Memo
