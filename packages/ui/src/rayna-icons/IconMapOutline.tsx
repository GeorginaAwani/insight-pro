import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMapOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6ZM4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.454L9.565 13.17 4 6.152V6Zm6.814 8.743L20 8.833V18a2 2 0 0 1-2 2h-3.017l-4.169-5.257ZM12.431 20H6a2 2 0 0 1-2-2V9.37L12.43 20Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMapOutline)
export default Memo
