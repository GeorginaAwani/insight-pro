import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCandlesHFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M18 8.5V8h3a1 1 0 1 0 0-2h-3v-.5A1.5 1.5 0 0 0 16.5 4h-3A1.5 1.5 0 0 0 12 5.5V6H3a1 1 0 0 0 0 2h9v.5a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 18 8.5ZM15 18v.5a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 6 18.5V18H3a1 1 0 1 1 0-2h3v-.5A1.5 1.5 0 0 1 7.5 14h6a1.5 1.5 0 0 1 1.5 1.5v.5h6a1 1 0 1 1 0 2h-6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCandlesHFilled)
export default Memo
