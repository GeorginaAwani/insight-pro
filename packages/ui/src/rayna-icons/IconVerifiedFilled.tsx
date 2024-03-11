import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconVerifiedFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.806 2.748a2.598 2.598 0 0 0-3.613 0 2.598 2.598 0 0 1-2.17.705 2.598 2.598 0 0 0-2.924 2.124 2.598 2.598 0 0 1-1.341 1.846 2.598 2.598 0 0 0-1.117 3.436c.352.72.352 1.562 0 2.282a2.598 2.598 0 0 0 1.117 3.436 2.598 2.598 0 0 1 1.341 1.846 2.598 2.598 0 0 0 2.923 2.124 2.598 2.598 0 0 1 2.17.705 2.598 2.598 0 0 0 3.614 0 2.598 2.598 0 0 1 2.17-.705 2.598 2.598 0 0 0 2.923-2.123c.139-.79.633-1.471 1.341-1.847a2.598 2.598 0 0 0 1.117-3.436 2.598 2.598 0 0 1 0-2.282 2.598 2.598 0 0 0-1.116-3.436 2.598 2.598 0 0 1-1.342-1.846 2.598 2.598 0 0 0-2.923-2.124 2.598 2.598 0 0 1-2.17-.705Zm2.91 6.948a1 1 0 0 0-1.434-1.392l-5.106 5.26-1.46-1.503a1 1 0 1 0-1.434 1.393l2.176 2.242a1 1 0 0 0 1.435 0l5.824-6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconVerifiedFilled)
export default Memo
