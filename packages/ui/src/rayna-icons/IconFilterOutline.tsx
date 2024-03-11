import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconFilterOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.281 2a3.281 3.281 0 0 0-2.688 5.162L8.638 15.8A2 2 0 0 1 9 16.946v2.21c0 2.05 2.157 3.384 3.99 2.467A3.636 3.636 0 0 0 15 18.37v-1.425a2 2 0 0 1 .361-1.147l6.046-8.636A3.281 3.281 0 0 0 18.719 2H5.281ZM13 18.371c0 .62-.35 1.186-.904 1.463A.757.757 0 0 1 11 19.157v-2.211a4 4 0 0 0-.723-2.294L4.232 6.016A1.281 1.281 0 0 1 5.28 4h13.438a1.281 1.281 0 0 1 1.05 2.016l-6.046 8.636A4 4 0 0 0 13 16.946v1.425Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconFilterOutline)
export default Memo
