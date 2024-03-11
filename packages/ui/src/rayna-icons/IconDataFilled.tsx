import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconDataFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M11 6.792a2.5 2.5 0 1 1 2 0V11h4a4 4 0 0 1 4 4v1.208a2.5 2.5 0 1 1-2 0V15a2 2 0 0 0-2-2h-4v3.208a2.5 2.5 0 1 1-2 0V13H7a2 2 0 0 0-2 2v1.208a2.5 2.5 0 1 1-2 0V15a4 4 0 0 1 4-4h4V6.792Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconDataFilled)
export default Memo
