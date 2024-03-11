import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconUserRemoveFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 22c-2.867 0-8.351-1.33-6.694-4C6.55 15.992 9.07 14 12 14s5.449 1.992 6.694 4c1.657 2.67-3.827 4-6.694 4ZM18 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconUserRemoveFilled)
export default Memo
