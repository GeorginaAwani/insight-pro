import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconScissorOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.915 3.403a1 1 0 1 0-1.83-.806L12 7.335 9.915 2.597a1 1 0 0 0-1.83.806l2.822 6.415-1.896 4.31A4 4 0 1 0 12 18a4 4 0 1 0 2.988-3.87l-1.897-4.31 2.823-6.416ZM14.7 16.48a1.004 1.004 0 0 0 .571-.343 2 2 0 1 1-.571.343Zm-1.464-1.37A3.989 3.989 0 0 0 12 18a3.989 3.989 0 0 0-1.236-2.89L12 12.3l1.236 2.808Zm-4.507 1.027a.996.996 0 0 0 .57.343 2 2 0 1 1-.571-.343Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconScissorOutline)
export default Memo
