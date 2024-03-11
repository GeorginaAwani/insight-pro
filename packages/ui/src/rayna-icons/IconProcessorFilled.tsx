import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconProcessorFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M8.5 10a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5v-4Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5 2a1 1 0 0 1 1 1v2.041c.897.15 1.66.7 2.099 1.459H21a1 1 0 1 1 0 2h-1v1h1a1 1 0 1 1 0 2h-1v1h1a1 1 0 1 1 0 2h-1v1h1a1 1 0 1 1 0 2h-1.401a3.01 3.01 0 0 1-1.613 1.334c.01.054.014.11.014.166v2a1 1 0 1 1-2 0v-2h-1v2a1 1 0 1 1-2 0v-2h-1v2a1 1 0 1 1-2 0v-2H9v2a1 1 0 1 1-2 0v-2c-1.11 0-2.08-.603-2.599-1.5H3a1 1 0 1 1 0-2h1v-1H3a1 1 0 1 1 0-2h1v-1H3a1 1 0 1 1 0-2h1v-1H3a1 1 0 0 1 0-2h1.401a3.003 3.003 0 0 1 2.1-1.459L6.5 5V3a1 1 0 0 1 2 0v2h1V3a1 1 0 0 1 2 0v2h1V3a1 1 0 1 1 2 0v2h1V3a1 1 0 0 1 1-1ZM9 7.5A2.5 2.5 0 0 0 6.5 10v4A2.5 2.5 0 0 0 9 16.5h6a2.5 2.5 0 0 0 2.5-2.5v-4A2.5 2.5 0 0 0 15 7.5H9Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconProcessorFilled)
export default Memo
