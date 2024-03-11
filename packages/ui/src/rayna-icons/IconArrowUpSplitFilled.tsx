import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconArrowUpSplitFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm13.797-1.225a1 1 0 0 1 1.408-.128l2.433 2.027a.998.998 0 0 1 .249 1.233l-1.616 3.23a1 1 0 1 1-1.789-.894l.7-1.4a6.331 6.331 0 0 0-4.08 5.917v6.075A1 1 0 0 1 12 20.83a1 1 0 0 1-1.101-.995V13.76a6.331 6.331 0 0 0-4.082-5.918l.7 1.401a1 1 0 1 1-1.788.894l-1.616-3.23a.997.997 0 0 1 .249-1.233l2.433-2.027a1 1 0 0 1 1.28 1.536l-.827.689A8.347 8.347 0 0 1 12 9.994a8.347 8.347 0 0 1 4.752-4.122l-.827-.689a1 1 0 0 1-.128-1.408Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconArrowUpSplitFilled)
export default Memo
