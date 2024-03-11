import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCoinsFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M22 8a6 6 0 0 1-6.253 5.995 8.014 8.014 0 0 0-5.742-5.742A6 6 0 1 1 22 8ZM8 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCoinsFilled)
export default Memo
