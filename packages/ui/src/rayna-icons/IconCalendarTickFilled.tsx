import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCalendarTickFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M7 1a1 1 0 0 1 1 1v1.5H6V2a1 1 0 0 1 1-1ZM14 4H8v1a1 1 0 0 1-2 0V4H5a3 3 0 0 0-3 3v.5h18V7a3 3 0 0 0-3-3h-1v1a1 1 0 1 1-2 0V4ZM2 9.5V18a3 3 0 0 0 3 3h9.358a2.998 2.998 0 0 1 3.658-2.77l.852-.851c.33-.33.718-.568 1.132-.712V9.5H2ZM16 2a1 1 0 1 0-2 0v1.5h2V2ZM21.696 20.207a1 1 0 0 0-1.414-1.414l-1.939 1.939-.282-.282a1 1 0 0 0-1.414 1.414l.989.989a1 1 0 0 0 1.414 0l2.646-2.646Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCalendarTickFilled)
export default Memo
