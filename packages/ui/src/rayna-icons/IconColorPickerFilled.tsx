import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconColorPickerFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M16.242 4.929a2 2 0 0 1 2.829 2.828l-3.536 3.536a1 1 0 0 1-1.414 0l-1.414-1.414a1 1 0 0 1 0-1.415l3.535-3.535Z"
      fill="currentColor"
    />
    <path
      d="m14.121 11.293-1.414-1.414-7.778 7.778a1 1 0 0 0 1.414 1.414l7.778-7.778Z"
      fill="currentColor"
    />
    <path
      d="M14.121 11.293a1 1 0 0 0 1.414 0l3.536-3.536a2 2 0 0 0-2.829-2.828l-3.535 3.535a1 1 0 0 0 0 1.415m1.414 1.414-1.414-1.414m1.414 1.414 1.414 1.414m-1.414-1.414L6.343 19.07a1 1 0 0 1-1.414-1.414l7.778-7.778m0 0-1.414-1.415"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Memo = memo(SvgIconColorPickerFilled)
export default Memo
