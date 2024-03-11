import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconArrowDownRightFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm14.364 16.364a1 1 0 0 1-1 1h-5.657a1 1 0 0 1 0-2h3.243L4.929 6.344a1 1 0 0 1 1.414-1.415l11.021 11.02v-3.242a1 1 0 1 1 2 0v5.657Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconArrowDownRightFilled)
export default Memo
