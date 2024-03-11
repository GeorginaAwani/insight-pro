import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconTabletOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 1.5a4 4 0 0 1 4 4v13a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-13a4 4 0 0 1 4-4h10Zm-12 4a2 2 0 0 1 2-2h2.134A1 1 0 0 0 10 4h4a1 1 0 0 0 .866-.5H17a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-13Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconTabletOutline)
export default Memo
