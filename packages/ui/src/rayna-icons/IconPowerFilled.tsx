import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPowerFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M13 3a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0V3Z" fill="currentColor" />
    <path
      d="M4 13c0-3.728 2.55-6.86 6-7.748V11a2 2 0 1 0 4 0V5.252A8 8 0 1 1 4 13Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPowerFilled)
export default Memo
