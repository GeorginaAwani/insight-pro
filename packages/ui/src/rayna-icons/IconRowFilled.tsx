import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconRowFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M20.5 20v-5a1.5 1.5 0 0 0-1.5-1.5H4A1.5 1.5 0 0 0 2.5 15v5A1.5 1.5 0 0 0 4 21.5h15a1.5 1.5 0 0 0 1.5-1.5ZM19 2.5H4A1.5 1.5 0 0 0 2.5 4v5A1.5 1.5 0 0 0 4 10.5h15A1.5 1.5 0 0 0 20.5 9V4A1.5 1.5 0 0 0 19 2.5Z"
      fill="currentColor"
    />
    <path
      d="M20.5 20v-5a1.5 1.5 0 0 0-1.5-1.5H4A1.5 1.5 0 0 0 2.5 15v5A1.5 1.5 0 0 0 4 21.5h15a1.5 1.5 0 0 0 1.5-1.5ZM19 2.5H4A1.5 1.5 0 0 0 2.5 4v5A1.5 1.5 0 0 0 4 10.5h15A1.5 1.5 0 0 0 20.5 9V4A1.5 1.5 0 0 0 19 2.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconRowFilled)
export default Memo
