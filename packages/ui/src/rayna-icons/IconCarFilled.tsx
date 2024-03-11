import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCarFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M3.146 10.56 3 11h18l-.146-.44.853-.853a1 1 0 0 0-1.414-1.414l-.147.146-.69-2.071A2 2 0 0 0 17.558 5H6.442a2 2 0 0 0-1.898 1.368l-.69 2.071-.147-.146a1 1 0 0 0-1.414 1.414l.853.854ZM22 12v3.5a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 15.5V12h20ZM3.5 20v-2H8v2a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1ZM16 18h4.5v2a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1v-2Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCarFilled)
export default Memo
