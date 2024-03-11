import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCardOutFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 9v8.5a3 3 0 0 0 3 3h10.118a2.998 2.998 0 0 1 1.382-3.432V17H16a1 1 0 1 1 0-2h.67a3.001 3.001 0 0 1 5.33-.659V9H2Zm2 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
    <path
      d="m21.664 20.414-1.5 1.333a1 1 0 0 1-1.328 0l-1.5-1.333A1 1 0 0 1 18.5 18.8V16a1 1 0 1 1 2 0v2.8a1 1 0 0 1 1.164 1.614Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCardOutFilled)
export default Memo
