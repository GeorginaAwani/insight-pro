import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChartUpOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M5.293 14.96a1 1 0 1 0 1.414 1.414l3.36-3.36 1.3 1.06a1 1 0 0 0 1.365-.093l3.27-3.516 1.268 1.352a1 1 0 1 0 1.46-1.367l-2-2.134a1 1 0 0 0-1.462.003l-3.362 3.613-1.274-1.04a1 1 0 0 0-1.34.068l-4 4Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H5ZM3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChartUpOutline)
export default Memo
