import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMailOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 21a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h14ZM3 17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9.477l-7.514 3.006a4 4 0 0 1-2.971 0L3 9.477V17Zm9.743-6.374L21 7.323V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v.323l8.258 3.303a2 2 0 0 0 1.485 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMailOutline)
export default Memo
