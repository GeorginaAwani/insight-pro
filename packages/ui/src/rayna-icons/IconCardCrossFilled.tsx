import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCardCrossFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 9v8.5a3 3 0 0 0 3 3h10.587a3 3 0 0 1 .352-1.5 3.007 3.007 0 0 1-.283-2.06A1 1 0 0 1 16 15h1.063c.901-.531 2.02-.552 2.937-.06a3.007 3.007 0 0 1 2-.297V9H2Zm2 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
    <path
      d="m21.243 18.828.707-.707a1 1 0 0 0-1.415-1.414l-.707.707-.707-.707a1 1 0 0 0-1.414 1.414l.707.707-.707.707a1 1 0 0 0 1.414 1.415l.707-.707.707.707a1 1 0 1 0 1.415-1.415l-.707-.707Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCardCrossFilled)
export default Memo
