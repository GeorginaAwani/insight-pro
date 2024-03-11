import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMobileOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 1.5a4 4 0 0 1 4 4v13a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-13a4 4 0 0 1 4-4h6Zm-8 4a2 2 0 0 1 2-2h.585A1.5 1.5 0 0 0 11 4.5h2a1.5 1.5 0 0 0 1.415-1H15a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-13Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMobileOutline)
export default Memo
