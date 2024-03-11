import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconColumnFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M19.5 3h-5A1.5 1.5 0 0 0 13 4.5v15a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3ZM2 4.5v15A1.5 1.5 0 0 0 3.5 21h5a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 8.5 3h-5A1.5 1.5 0 0 0 2 4.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconColumnFilled)
export default Memo
