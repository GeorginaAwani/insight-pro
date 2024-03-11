import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconScanFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2 6a4 4 0 0 1 4-4h2a1 1 0 0 1 0 2H6a2 2 0 0 0-2 2v2a1 1 0 0 1-2 0V6ZM22 6a4 4 0 0 0-4-4h-2a1 1 0 1 0 0 2h2a2 2 0 0 1 2 2v2a1 1 0 1 0 2 0V6ZM6 22a4 4 0 0 1-4-4v-2a1 1 0 1 1 2 0v2a2 2 0 0 0 2 2h2a1 1 0 1 1 0 2H6ZM22 18a4 4 0 0 1-4 4h-2a1 1 0 1 1 0-2h2a2 2 0 0 0 2-2v-2a1 1 0 1 1 2 0v2ZM2 12a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H2Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconScanFilled)
export default Memo
