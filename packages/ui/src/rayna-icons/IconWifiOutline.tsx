import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconWifiOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 5a10 10 0 0 0-9.238 6.173 1 1 0 1 0 1.848.765 8 8 0 0 1 14.782 0 1 1 0 1 0 1.848-.765A9.999 9.999 0 0 0 12 5Z"
      fill="currentColor"
    />
    <path
      d="M12 8a7 7 0 0 0-6.777 5.25 1 1 0 1 0 1.937.5A5.003 5.003 0 0 1 12 10a5 5 0 0 1 4.842 3.75 1 1 0 0 0 1.937-.5 6.991 6.991 0 0 0-1.828-3.2A7 7 0 0 0 12 8Z"
      fill="currentColor"
    />
    <path
      d="M10.47 11.305a4.001 4.001 0 0 1 5.475 3.028 1 1 0 1 1-1.972.334 1.998 1.998 0 0 0-2.738-1.515 2.002 2.002 0 0 0-1.206 1.515 1 1 0 0 1-1.972-.334 4 4 0 0 1 2.413-3.028Z"
      fill="currentColor"
    />
    <path d="M12 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="currentColor" />
  </svg>
)
const Memo = memo(SvgIconWifiOutline)
export default Memo
