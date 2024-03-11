import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBankFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.684 3.106-8 2.666A1 1 0 0 0 3 6.721V9a1 1 0 0 0 1 1h1v7H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1v-7h1a1 1 0 0 0 1-1V6.72a1 1 0 0 0-.684-.949l-8-2.666a1 1 0 0 0-.632 0ZM17 17v-7h-2v7h2Zm-4 0v-7h-2v7h2Zm-4 0v-7H7v7h2Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBankFilled)
export default Memo
