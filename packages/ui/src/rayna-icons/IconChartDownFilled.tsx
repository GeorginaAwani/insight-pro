import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChartDownFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 4h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm.293 5.707a1 1 0 0 1 1.414-1.414l3.36 3.36 1.3-1.06a1 1 0 0 1 1.365.093l3.27 3.515 1.268-1.352a1 1 0 1 1 1.46 1.368l-2 2.134a1 1 0 0 1-1.462-.003l-3.362-3.614-1.274 1.04a1 1 0 0 1-1.34-.067l-4-4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChartDownFilled)
export default Memo
