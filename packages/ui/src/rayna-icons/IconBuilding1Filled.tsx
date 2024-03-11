import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBuilding1Filled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 19V9.58a1 1 0 0 1 .504-.868l6.007-3.433a1 1 0 0 1 .982-.005L15.5 6.945A1 1 0 0 1 17.5 7v1.1l1.015.609a1 1 0 0 1 .485.857V19h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h1Zm6 0h2v-2a1 1 0 1 0-2 0v2Zm5-5a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm-1-2a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1Zm-4 2a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm-1-2a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBuilding1Filled)
export default Memo
