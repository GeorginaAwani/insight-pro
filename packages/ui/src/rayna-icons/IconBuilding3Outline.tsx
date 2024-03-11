import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBuilding3Outline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M16 14a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1ZM15 12a1 1 0 0 0 0-2h-1a1 1 0 1 0 0 2h1ZM11 14a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1ZM10 12a1 1 0 0 0 0-2H9a1 1 0 1 0 0 2h1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.11 4.538a2 2 0 0 0-2.22 0l-5 3.333A2 2 0 0 0 5 9.535V19H4a1 1 0 1 0 0 2h16a1 1 0 0 0 0-2h-1V9.535a2 2 0 0 0-.89-1.664l-5-3.333ZM13 19v-2a1 1 0 1 0-2 0v2H7V9.535l5-3.333 5 3.333V19h-4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBuilding3Outline)
export default Memo
