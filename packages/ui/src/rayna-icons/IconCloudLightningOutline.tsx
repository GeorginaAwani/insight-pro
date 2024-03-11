import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCloudLightningOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6 9.5a5.5 5.5 0 0 1 10.907-1.013 1 1 0 0 0 .668.766A5 5 0 0 1 16 19a1 1 0 1 0 0 2 7 7 0 0 0 2.746-13.44A7.5 7.5 0 0 0 4.006 9.8 6 6 0 0 0 7 21a1 1 0 1 0 0-2 4 4 0 0 1-1.551-7.688 1 1 0 0 0 .602-1.058A5.557 5.557 0 0 1 6 9.5Z"
      fill="currentColor"
    />
    <path
      d="M13.075 15.538a1 1 0 1 0-1.687-1.076l-2.231 3.5A1 1 0 0 0 10 19.5h1.326l-1.09 2.026a1 1 0 1 0 1.76.948l1.884-3.5A1 1 0 0 0 13 17.5h-1.177l1.252-1.962Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCloudLightningOutline)
export default Memo
