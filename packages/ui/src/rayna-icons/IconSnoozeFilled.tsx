import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSnoozeFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M5 3a1 1 0 0 0 0 2h2.865L4.232 9.36A1 1 0 0 0 5 11h5a1 1 0 1 0 0-2H7.135l3.633-4.36A1 1 0 0 0 10 3H5ZM12 11a1 1 0 1 0 0 2h4.796l-5.549 6.341A1 1 0 0 0 12 21h7a1 1 0 1 0 0-2h-4.796l5.549-6.341A1 1 0 0 0 19 11h-7Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSnoozeFilled)
export default Memo
