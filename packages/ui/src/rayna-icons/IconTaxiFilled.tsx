import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconTaxiFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M14.191 4.5H9.809l.5-1h3.382l.5 1ZM2.5 12a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 .5.5v3.5a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V12ZM18.982 6.526l1.324 3.974H3.694l1.324-3.974A1.5 1.5 0 0 1 6.442 5.5h11.116a1.5 1.5 0 0 1 1.424 1.026ZM16.5 17.5H20V19a.5.5 0 0 1-.5.5H17a.5.5 0 0 1-.5-.5v-1.5ZM4 19v-1.5h3.5V19a.5.5 0 0 1-.5.5H4.5A.5.5 0 0 1 4 19Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconTaxiFilled)
export default Memo
