import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconRedoFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm15.457 6.707a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L17.336 7H9.75a6.5 6.5 0 0 0 0 13h8a1 1 0 1 0 0-2h-8a4.5 4.5 0 1 1 0-9h7.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconRedoFilled)
export default Memo
