import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconHeadsetFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2 13C2 7.477 6.477 3 12 3s10 4.477 10 10v5a1 1 0 0 1-1.11.994 1.589 1.589 0 0 1-1.87.957c-1.245.853-3.067 1.549-5.52 1.549a1 1 0 1 1 0-2c2.018 0 3.42-.553 4.323-1.155V16.24c0-1.296 1.24-1.835 2.177-1.501V13a8 8 0 1 0-16 0v1.748c.937-.333 2.176.208 2.176 1.503v2.16a1.588 1.588 0 0 1-3.066.583A1.001 1.001 0 0 1 2 18v-5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconHeadsetFilled)
export default Memo
