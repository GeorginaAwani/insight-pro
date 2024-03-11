import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCardRemoveFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M5 3.5h14a3 3 0 0 1 3 3V7H2v-.5a3 3 0 0 1 3-3Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 9v8.5a3 3 0 0 0 3 3h11.341a2.997 2.997 0 0 1-1.049-3.793A1 1 0 0 1 16 15h6V9H2Zm2 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
    <path d="M18 17a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z" fill="currentColor" />
  </svg>
)
const Memo = memo(SvgIconCardRemoveFilled)
export default Memo
