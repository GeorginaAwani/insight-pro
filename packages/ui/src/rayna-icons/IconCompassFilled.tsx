import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCompassFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm1.043-13.521-3.117 1.73a1 1 0 0 0-.514.891l.06 3.564a1 1 0 0 0 1.485.857l3.116-1.73a1 1 0 0 0 .515-.89l-.06-3.565a1 1 0 0 0-1.485-.857Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCompassFilled)
export default Memo
