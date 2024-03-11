import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconItalicsFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M7 3h6m6 0h-6m0 0-2 18m0 0h6m-6 0H5"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Memo = memo(SvgIconItalicsFilled)
export default Memo
