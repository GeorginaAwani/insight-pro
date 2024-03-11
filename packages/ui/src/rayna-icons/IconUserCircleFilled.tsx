import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconUserCircleFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-11.003 9.5c-2.894 0-8.186-1.933-6.757-4.5 1.258-2.259 3.8-4.5 6.757-4.5 2.956 0 5.5 2.241 6.757 4.5 1.451 2.608-3.863 4.5-6.757 4.5ZM12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconUserCircleFilled)
export default Memo
