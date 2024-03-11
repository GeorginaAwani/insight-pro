import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCodeFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M15.442 5.336a1 1 0 1 0-1.884-.672l-5 14a1 1 0 0 0 1.884.672l5-14ZM8.832 7.445a1 1 0 0 1-.277 1.387L3.803 12l4.752 3.168a1 1 0 1 1-1.11 1.664l-6-4a1 1 0 0 1 0-1.664l6-4a1 1 0 0 1 1.387.277ZM15.168 7.445a1 1 0 0 0 .277 1.387L20.197 12l-4.752 3.168a1 1 0 0 0 1.11 1.664l6-4a1 1 0 0 0 0-1.664l-6-4a1 1 0 0 0-1.387.277Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCodeFilled)
export default Memo
