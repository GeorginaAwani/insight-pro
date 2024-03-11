import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconLineHeightFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M3 3.5h18M13 12h8M3 20.5h18M5 6l2 1.91M5 6 3 7.91M5 6v12m0 0-2-1.91M5 18l2-1.91"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Memo = memo(SvgIconLineHeightFilled)
export default Memo
