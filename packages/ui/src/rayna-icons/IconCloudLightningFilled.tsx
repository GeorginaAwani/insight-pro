import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCloudLightningFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2 15a5 5 0 0 0 5 5h.402a3 3 0 0 1 .068-3.113l2.232-3.5a3 3 0 0 1 5.264 2.847 2.997 2.997 0 0 1 .676 3.688L15.6 20h.4a6 6 0 0 0 1.89-11.696A6.5 6.5 0 0 0 5.06 10.39 5.002 5.002 0 0 0 2 15Z"
      fill="currentColor"
    />
    <path
      d="M13.075 15.538a1 1 0 1 0-1.687-1.076l-2.231 3.5A1 1 0 0 0 10 19.5h1.326l-1.09 2.026a1 1 0 1 0 1.76.948l1.884-3.5A1 1 0 0 0 13 17.5h-1.177l1.252-1.962Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCloudLightningFilled)
export default Memo
