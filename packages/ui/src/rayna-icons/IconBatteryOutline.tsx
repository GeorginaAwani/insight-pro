import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBatteryOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6.5 8a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1ZM10.5 9a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V9ZM12.5 8a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1ZM16.5 9a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V9Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v.208a2.5 2.5 0 0 1 1.5 2.292v1a2.5 2.5 0 0 1-1.5 2.292V15a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9Zm16 6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBatteryOutline)
export default Memo
