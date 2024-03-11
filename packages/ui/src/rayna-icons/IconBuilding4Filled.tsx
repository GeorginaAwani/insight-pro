import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBuilding4Filled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M8 6V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h-1a1 1 0 1 0 0 2h1v1h-2a1 1 0 1 0 0 2h2v1h-1a1 1 0 1 0 0 2h1v1h-2a1 1 0 1 0 0 2h2v2h4a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h4v-2h1a1 1 0 1 0 0-2H8v-1h2a1 1 0 1 0 0-2H8v-1h1a1 1 0 1 0 0-2H8V8h2a1 1 0 1 0 0-2H8Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBuilding4Filled)
export default Memo
