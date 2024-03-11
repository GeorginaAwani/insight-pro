import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPcLockOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.25 7.4a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V11a1 1 0 0 1-.042.289 2.667 2.667 0 0 1 1.459 2.378v.357A2.334 2.334 0 0 1 22 16.134V18a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.99-1.8h-2.76v.4h1.25a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2h1.25v-.4h-4a4 4 0 0 1-4-4V7.4ZM14 16.2v-.067c0-.93.545-1.734 1.333-2.108v-.358c0-1.215.812-2.24 1.923-2.562A1.017 1.017 0 0 1 17.25 11V7.4a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2v6.8a2 2 0 0 0 2 2H14Zm3.333-2.533a.667.667 0 0 1 1.334 0v.133h-1.334v-.133ZM16 16.133c0-.184.15-.333.333-.333h3.334c.184 0 .333.15.333.333V18h-4v-1.867Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPcLockOutline)
export default Memo
