import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChartUpFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 4h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm.293 10.96a1 1 0 1 0 1.414 1.414l3.36-3.36 1.3 1.06a1 1 0 0 0 1.365-.093l3.27-3.516 1.268 1.352a1 1 0 1 0 1.46-1.367l-2-2.134a1 1 0 0 0-1.462.003l-3.362 3.613-1.274-1.04a1 1 0 0 0-1.34.068l-4 4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChartUpFilled)
export default Memo
