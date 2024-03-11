import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPcLockFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M5 4.9h10a3 3 0 0 1 3 3v3.366a1.944 1.944 0 0 0-2.194 1.928v1.256c-.86 0-1.556.696-1.556 1.556V17.7h-3v.9h1.25a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2h1.25v-.9H5a3 3 0 0 1-3-3V7.9a3 3 0 0 1 3-3Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 18.667v-2.345c0-.859.696-1.555 1.556-1.555v-.823a1.944 1.944 0 0 1 3.888 0v.823c.86 0 1.556.696 1.556 1.555v2.345a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1Zm3.5-5.417a.5.5 0 0 1 .5.5v.9h-1v-.9a.5.5 0 0 1 .5-.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPcLockFilled)
export default Memo
