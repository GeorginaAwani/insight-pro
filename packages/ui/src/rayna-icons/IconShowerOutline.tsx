import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconShowerOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 7a3 3 0 0 1 5.975-.39l-1.682 1.683a1 1 0 0 0 1.414 1.414l2-2 2-2a1 1 0 0 0-1.414-1.414L16.584 5A5.001 5.001 0 0 0 7 7v13a1 1 0 1 0 2 0V7Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconShowerOutline)
export default Memo
