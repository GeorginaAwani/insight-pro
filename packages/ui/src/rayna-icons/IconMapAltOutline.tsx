import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMapAltOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.36 2.278A2 2 0 0 0 1.5 4.084v11.63a3 3 0 0 0 1.71 2.708l4.56 2.171a1 1 0 0 0 .548.09l7.313-.87 4.01 1.909a2 2 0 0 0 2.859-1.806V8.286a3 3 0 0 0-1.71-2.708l-4.56-2.171a1 1 0 0 0-.535-.092l-4.275.452a.988.988 0 0 0-.03.004l-3.03.412-4-1.905ZM20.5 19.916l-3.7-1.762V5.894l3.13 1.49a1 1 0 0 1 .57.903v11.63Zm-5.7-2.018V5.42l-3.155.334-2.445.332v12.477l5.6-.666ZM3.5 4.084l3.7 1.762v12.26l-3.13-1.49a1 1 0 0 1-.57-.903V4.083Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMapAltOutline)
export default Memo
