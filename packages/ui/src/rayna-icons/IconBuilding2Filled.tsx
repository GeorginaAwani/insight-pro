import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBuilding2Filled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 19h2a1 1 0 1 1 0 2H2.5a1 1 0 1 1 0-2H5V9.58a1 1 0 0 1 .504-.868l6-3.428a1 1 0 0 1 .992 0l6 3.428A1 1 0 0 1 19 9.58V19Zm-8 0h2v-1a1 1 0 1 0-2 0v1Zm5-9a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm-6 4a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1Zm1-4a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm4 4a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1Zm-4 2a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm4 1a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBuilding2Filled)
export default Memo
