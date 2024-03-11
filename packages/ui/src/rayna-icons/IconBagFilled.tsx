import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBagFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.784 6.058c.127-.615.308-1.24.563-1.83.36-.833.887-1.645 1.664-2.25C9.803 1.36 10.798 1 12 1s2.197.36 2.989.977c.777.606 1.304 1.418 1.664 2.251.255.59.436 1.215.563 1.83a2.965 2.965 0 0 1 2.295 2.174c3.53 14.026.39 13.92-5.295 13.726-.702-.024-1.444-.049-2.216-.049-.772 0-1.514.025-2.216.05-5.685.192-8.825.299-5.295-13.727a2.965 2.965 0 0 1 2.295-2.174ZM8.85 6c.09-.337.199-.667.333-.978.27-.626.62-1.126 1.058-1.468C10.665 3.224 11.222 3 12 3c.778 0 1.335.224 1.759.554.438.342.788.842 1.058 1.468.134.31.244.64.333.978h-6.3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBagFilled)
export default Memo
