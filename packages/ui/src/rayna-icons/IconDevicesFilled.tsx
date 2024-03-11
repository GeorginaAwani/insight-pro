import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconDevicesFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M5 2.9h10a3 3 0 0 1 3 3v2.35h-3.25a2.5 2.5 0 0 0-2.5 2.5v4.95H11v1.4a1 1 0 1 1 0 2H6.8a1 1 0 1 1 0-2H9v-1.4H5a3 3 0 0 1-3-3V5.9a3 3 0 0 1 3-3Z"
      fill="currentColor"
    />
    <path
      d="M15 9h.134a1 1 0 0 0 .866.5h2a1 1 0 0 0 .866-.5H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconDevicesFilled)
export default Memo
