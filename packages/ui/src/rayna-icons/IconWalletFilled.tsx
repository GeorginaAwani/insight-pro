import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconWalletFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M18 20H6a3 3 0 0 1-3-3V6.225C3 4.996 3.996 4 5.225 4h6.789c.476 0 .87.74 1.25 1.55H6a1 1 0 0 0 0 2h8.489l.011.006h3.501a3 3 0 0 1 2.999 3V11h-2a3 3 0 1 0 0 6h2a3 3 0 0 1-3 3Z"
      fill="currentColor"
    />
    <path d="M21 15v-2h-2a1 1 0 1 0 0 2h2Z" fill="currentColor" />
  </svg>
)
const Memo = memo(SvgIconWalletFilled)
export default Memo
