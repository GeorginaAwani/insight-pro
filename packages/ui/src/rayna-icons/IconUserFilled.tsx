import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconUserFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5.306 18C3.649 20.67 9.133 22 12 22s8.35-1.33 6.694-4C17.45 15.992 14.93 14 12 14s-5.449 1.992-6.694 4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconUserFilled)
export default Memo
