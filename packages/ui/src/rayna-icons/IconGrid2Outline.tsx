import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconGrid2Outline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 8.5A2.5 2.5 0 0 0 4.5 11h15A2.5 2.5 0 0 0 22 8.5v-4A2.5 2.5 0 0 0 19.5 2h-15A2.5 2.5 0 0 0 2 4.5v4Zm2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-15ZM4.5 22A2.5 2.5 0 0 1 2 19.5v-5A2.5 2.5 0 0 1 4.5 12h4a2.5 2.5 0 0 1 2.5 2.5v5A2.5 2.5 0 0 1 8.5 22h-4ZM4 19.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v5ZM15.5 22a2.5 2.5 0 0 1-2.5-2.5v-5a2.5 2.5 0 0 1 2.5-2.5h4a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-4Zm-.5-2.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconGrid2Outline)
export default Memo
