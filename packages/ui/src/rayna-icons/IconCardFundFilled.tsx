import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCardFundFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 9v8.5a3 3 0 0 0 3 3h11.5v-.568a2.998 2.998 0 0 1-1.377-3.451A1 1 0 0 1 16 15h.11l1.397-1.242a3 3 0 0 1 3.986 0l.507.45V9H2Zm2 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
    <path
      d="M20.164 15.253a1 1 0 0 0-1.328 0l-1.5 1.333A1 1 0 0 0 18.5 18.2V21a1 1 0 1 0 2 0v-2.8a1 1 0 0 0 1.164-1.614l-1.5-1.333Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCardFundFilled)
export default Memo
