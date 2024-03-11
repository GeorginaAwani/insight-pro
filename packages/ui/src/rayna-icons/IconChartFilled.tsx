import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChartFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h5.586l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 19.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 18H19a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3ZM5.293 14.374a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.34-.068l1.273 1.04 3.362-3.613a1 1 0 0 1 1.462-.003l2 2.133a1 1 0 1 1-1.46 1.368l-1.267-1.352-3.27 3.516a1 1 0 0 1-1.366.094l-1.3-1.062-3.36 3.36a1 1 0 0 1-1.414 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChartFilled)
export default Memo
