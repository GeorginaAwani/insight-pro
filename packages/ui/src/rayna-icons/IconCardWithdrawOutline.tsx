import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCardWithdrawOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 6.5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v7.75a1 1 0 1 1-2 0V9H3v8.5a2 2 0 0 0 2 2h9.5a1 1 0 1 1 0 2H5a4 4 0 0 1-4-4v-11ZM3 7h18v-.5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2V7Z"
      fill="currentColor"
    />
    <path
      d="M4 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM21.414 20.664l1.333-1.5a1 1 0 0 0 0-1.328l-1.333-1.5A1 1 0 0 0 19.8 17.5H17a1 1 0 1 0 0 2h2.8a1 1 0 0 0 1.614 1.164Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCardWithdrawOutline)
export default Memo
