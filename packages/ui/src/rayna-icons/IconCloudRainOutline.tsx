import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCloudRainOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6 9.5a5.5 5.5 0 0 1 10.907-1.013 1 1 0 0 0 .668.766 5.003 5.003 0 0 1-.74 9.678 1 1 0 0 0 .33 1.972A7.002 7.002 0 0 0 18.747 7.56 7.5 7.5 0 0 0 4.006 9.8 6.002 6.002 0 0 0 5.8 20.88a1 1 0 1 0 .398-1.96 4.002 4.002 0 0 1-.75-7.608 1 1 0 0 0 .602-1.058A5.557 5.557 0 0 1 6 9.5Z"
      fill="currentColor"
    />
    <path
      d="M10.461 17.775a1 1 0 1 0-1.923-.55l-1 3.5a1 1 0 1 0 1.924.55l1-3.5ZM12.275 16.538a1 1 0 0 1 .686 1.237l-1 3.5a1 1 0 1 1-1.922-.55l1-3.5a1 1 0 0 1 1.236-.687ZM15.461 17.775a1 1 0 1 0-1.922-.55l-1 3.5a1 1 0 1 0 1.922.55l1-3.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCloudRainOutline)
export default Memo
