import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMailCheckFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M5 4h14a3 3 0 0 1 3 3 .997.997 0 0 0-.371.072l-8.886 3.554a2 2 0 0 1-1.486 0L2.371 7.072A.998.998 0 0 0 2 7a3 3 0 0 1 3-3Z"
      fill="currentColor"
    />
    <path
      d="M2 9.077V17a3 3 0 0 0 3 3h10.358a2.998 2.998 0 0 1 3.658-2.77l.852-.851A2.99 2.99 0 0 1 22 15.5V9.077l-8.514 3.406a4 4 0 0 1-2.972 0L2 9.077ZM22.696 19.207a1 1 0 0 0-1.414-1.414l-1.939 1.939-.282-.282a1 1 0 0 0-1.414 1.414l.989.989a1 1 0 0 0 1.414 0l2.646-2.646Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMailCheckFilled)
export default Memo
