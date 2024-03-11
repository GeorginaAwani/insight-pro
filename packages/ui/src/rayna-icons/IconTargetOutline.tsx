import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconTargetOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M18.235 2.937A10.949 10.949 0 0 0 12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11a10.95 10.95 0 0 0-1.936-6.235L19.62 7.209a9 9 0 1 1-2.828-2.828l1.443-1.444Z"
      fill="currentColor"
    />
    <path
      d="M20 1a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1.586l-6.563 6.563A1 1 0 0 1 13.5 13.5h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1.937-.35L19 3.585V2a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
    <path
      d="M12 5c1.206 0 2.34.305 3.33.841l-1.503 1.503a5 5 0 1 0 2.828 2.828L18.16 8.67A7 7 0 1 1 12 5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconTargetOutline)
export default Memo
