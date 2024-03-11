import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCardWithdrawFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 9v8.5a3 3 0 0 0 3 3h9.764a2.989 2.989 0 0 1-.764-2c0-.902.398-1.712 1.029-2.261A1 1 0 0 1 16 15h2c.13 0 .255.025.37.07a3 3 0 0 1 3.63-.759V9H2Zm2 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
    <path
      d="m21.414 20.664 1.333-1.5a1 1 0 0 0 0-1.328l-1.333-1.5A1 1 0 0 0 19.8 17.5H17a1 1 0 1 0 0 2h2.8a1 1 0 0 0 1.614 1.164Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCardWithdrawFilled)
export default Memo
