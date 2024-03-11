import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBuilding2Outline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M15 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1ZM11 13a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM10 11a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2h1ZM16 13a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM10 17a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1ZM16 16a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.992 4.415a2 2 0 0 0-1.984 0l-6 3.429A2 2 0 0 0 4 9.58V19H2.5a1 1 0 1 0 0 2h19a1 1 0 1 0 0-2H20V9.58a2 2 0 0 0-1.008-1.736l-6-3.429ZM13 19v-1a1 1 0 1 0-2 0v1H6V9.58l6-3.428 6 3.428V19h-5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBuilding2Outline)
export default Memo
