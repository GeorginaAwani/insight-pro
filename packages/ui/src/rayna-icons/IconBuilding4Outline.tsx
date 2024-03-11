import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBuilding4Outline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14h3a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h3V5Zm8 10h-2a1 1 0 1 0 0 2h2v2H9v-2h1a1 1 0 1 0 0-2H9v-1h2a1 1 0 1 0 0-2H9v-1h1a1 1 0 1 0 0-2H9V8h2a1 1 0 1 0 0-2H9V5h6v1h-1a1 1 0 1 0 0 2h1v1h-2a1 1 0 1 0 0 2h2v1h-1a1 1 0 1 0 0 2h1v1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBuilding4Outline)
export default Memo
