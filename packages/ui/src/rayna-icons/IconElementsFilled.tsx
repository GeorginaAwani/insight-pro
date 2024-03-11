import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconElementsFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M13.5 15v5a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5h-5a1.5 1.5 0 0 0-1.5 1.5ZM5.031 13.901l-2.63 2.63a1.37 1.37 0 0 0 0 1.938l2.63 2.63a1.37 1.37 0 0 0 1.938 0l2.63-2.63a1.37 1.37 0 0 0 0-1.938l-2.63-2.63a1.37 1.37 0 0 0-1.938 0ZM2.5 4v5A1.5 1.5 0 0 0 4 10.5h5A1.5 1.5 0 0 0 10.5 9V4A1.5 1.5 0 0 0 9 2.5H4A1.5 1.5 0 0 0 2.5 4ZM17.5 10.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconElementsFilled)
export default Memo
