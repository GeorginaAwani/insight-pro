import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBuilding3Filled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 19h2a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h2V9.535a1 1 0 0 1 .445-.832l5-3.333a1 1 0 0 1 1.11 0l5 3.333a1 1 0 0 1 .445.832V19Zm-7 0h2v-2a1 1 0 1 0-2 0v2Zm4-4a1 1 0 0 0 0-2h-1a1 1 0 1 0 0 2h1Zm1-4a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm-6 4a1 1 0 0 0 0-2H9a1 1 0 1 0 0 2h1Zm1-4a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBuilding3Filled)
export default Memo
