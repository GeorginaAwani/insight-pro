import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCloudRainFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2 15a5.002 5.002 0 0 0 3.713 4.833l.902-3.157a3 3 0 0 1 4.135-1.903 2.988 2.988 0 0 1 2.5 0 3 3 0 0 1 4.134 3.552l-.458 1.604a6.001 6.001 0 0 0 .964-11.625A6.5 6.5 0 0 0 5.06 10.39 5.002 5.002 0 0 0 2 15Z"
      fill="currentColor"
    />
    <path
      d="M10.461 17.775a1 1 0 1 0-1.923-.55l-1 3.5a1 1 0 1 0 1.924.55l1-3.5ZM12.275 16.538a1 1 0 0 1 .686 1.237l-1 3.5a1 1 0 1 1-1.922-.55l1-3.5a1 1 0 0 1 1.236-.687ZM15.461 17.775a1 1 0 1 0-1.922-.55l-1 3.5a1 1 0 1 0 1.922.55l1-3.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCloudRainFilled)
export default Memo
