import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconLifebuoyFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M8.24 7.18 5.497 4.437a9.976 9.976 0 0 1 13.005 0L15.759 7.18a6.115 6.115 0 0 0-7.519 0ZM16.82 8.24l2.742-2.743a9.976 9.976 0 0 1 0 13.006l-2.743-2.744a6.115 6.115 0 0 0 0-7.518ZM15.758 16.82l2.744 2.743a9.976 9.976 0 0 1-13.005 0L8.24 16.82a6.115 6.115 0 0 0 7.518 0ZM7.18 15.76l-2.744 2.743a9.976 9.976 0 0 1 0-13.006l2.743 2.744a6.115 6.115 0 0 0 0 7.518Z"
      fill="currentColor"
    />
    <path
      d="M8.738 8.739a4.612 4.612 0 1 1 6.522 6.522 4.612 4.612 0 0 1-6.522-6.522Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconLifebuoyFilled)
export default Memo
