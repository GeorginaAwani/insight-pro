import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChartOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M5.293 14.374a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.34-.068l1.273 1.04 3.362-3.613a1 1 0 0 1 1.462-.003l2 2.133a1 1 0 1 1-1.46 1.368l-1.267-1.352-3.27 3.516a1 1 0 0 1-1.366.094l-1.3-1.062-3.36 3.36a1 1 0 0 1-1.414 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-4.586l2.293 2.293a1 1 0 0 1-1.414 1.414L12 19.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L9.586 19H5a4 4 0 0 1-4-4V5Zm18 12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChartOutline)
export default Memo
