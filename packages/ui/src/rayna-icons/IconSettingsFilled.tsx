import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSettingsFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.806 2.748a2.598 2.598 0 0 0-3.612 0 2.598 2.598 0 0 1-2.17.705A2.598 2.598 0 0 0 5.1 5.577 2.598 2.598 0 0 1 3.76 7.423a2.598 2.598 0 0 0-1.117 3.436c.352.72.352 1.562 0 2.282a2.598 2.598 0 0 0 1.117 3.436A2.598 2.598 0 0 1 5.1 18.423a2.598 2.598 0 0 0 2.923 2.124 2.598 2.598 0 0 1 2.17.705 2.598 2.598 0 0 0 3.614 0 2.598 2.598 0 0 1 2.17-.705 2.598 2.598 0 0 0 2.923-2.123c.138-.79.633-1.471 1.341-1.847a2.598 2.598 0 0 0 1.117-3.436 2.598 2.598 0 0 1 0-2.282 2.598 2.598 0 0 0-1.117-3.436A2.598 2.598 0 0 1 18.9 5.577a2.598 2.598 0 0 0-2.923-2.124 2.598 2.598 0 0 1-2.17-.705ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSettingsFilled)
export default Memo
