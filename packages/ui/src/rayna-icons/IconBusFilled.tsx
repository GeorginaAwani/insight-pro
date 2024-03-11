import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBusFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 2h12a2 2 0 0 1 2 2v9.586l.793-.793a1 1 0 0 1 1.414 1.414l-1.5 1.5A.997.997 0 0 1 20 16v2a2 2 0 0 1-2 2v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H9v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1a2 2 0 0 1-2-2v-2a.997.997 0 0 1-.707-.293l-1.5-1.5a1 1 0 1 1 1.414-1.414l.793.793V4a2 2 0 0 1 2-2Zm11 3H7v10h10V5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBusFilled)
export default Memo
