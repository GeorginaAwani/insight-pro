import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconHomeOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.294 2.385a4 4 0 0 0-4.587 0L2.829 7.2a4 4 0 0 0-1.694 3.584l.705 9.165a3 3 0 0 0 3.415 2.74l3.17-.453A3 3 0 0 0 11 19.265V18a1 1 0 1 1 2 0v1.265a3 3 0 0 0 2.575 2.97l3.17.453a3 3 0 0 0 3.415-2.74l.705-9.165A4 4 0 0 0 21.172 7.2l-6.878-4.814Zm-3.44 1.639a2 2 0 0 1 2.294 0l6.877 4.814a2 2 0 0 1 .847 1.792l-.705 9.165a1 1 0 0 1-1.138.913l-3.17-.453a1 1 0 0 1-.858-.99V18a3 3 0 0 0-6 0v1.265a1 1 0 0 1-.859.99l-3.17.453a1 1 0 0 1-1.138-.913l-.705-9.165a2 2 0 0 1 .847-1.792l6.878-4.814Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconHomeOutline)
export default Memo
