import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMoveFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm9.293-1.707a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L13 6.414V11h4.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L17.586 13H13v4.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L11 17.586V13H6.414l1.293 1.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L6.414 11H11V6.414L9.707 7.707a1 1 0 0 1-1.414-1.414l3-3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMoveFilled)
export default Memo
