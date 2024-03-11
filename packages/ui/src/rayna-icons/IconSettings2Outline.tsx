import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSettings2Outline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 3v2.126a4.002 4.002 0 0 1 0 7.748V21a1 1 0 1 1-2 0v-8.126a4.002 4.002 0 0 1 0-7.748V3a1 1 0 0 1 2 0ZM5 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM16 18.874V21a1 1 0 1 0 2 0v-2.126a4.002 4.002 0 0 0 0-7.748V3a1 1 0 1 0-2 0v8.126a4.002 4.002 0 0 0 0 7.748ZM19 15a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSettings2Outline)
export default Memo
