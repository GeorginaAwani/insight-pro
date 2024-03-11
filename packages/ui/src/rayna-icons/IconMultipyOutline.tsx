import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMultipyOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M7.05 5.636A1 1 0 1 0 5.638 7.05l4.95 4.95-4.95 4.95a1 1 0 1 0 1.414 1.414l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414-1.414L13.415 12l4.95-4.95a1 1 0 0 0-1.415-1.414L12 10.586l-4.95-4.95Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMultipyOutline)
export default Memo
