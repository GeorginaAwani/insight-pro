import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBoldFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M14.5 21H5.139A.139.139 0 0 1 5 20.861V12h9.5a4.5 4.5 0 1 1 0 9ZM13.5 12H5.129A.129.129 0 0 1 5 11.871V3h8.5a4.5 4.5 0 1 1 0 9Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Memo = memo(SvgIconBoldFilled)
export default Memo
