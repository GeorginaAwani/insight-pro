import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconColorPickerOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m12 9.172 4.242-4.243a2 2 0 0 1 2.829 2.828L14.828 12M12 9.172l.707.707M12 9.172l-.707-.708M14.828 12l.707.707M14.828 12l-.707-.707m-1.414-1.414-7.778 7.778a1 1 0 0 0 1.414 1.414l7.778-7.778m-1.414-1.414 1.414 1.414"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Memo = memo(SvgIconColorPickerOutline)
export default Memo
