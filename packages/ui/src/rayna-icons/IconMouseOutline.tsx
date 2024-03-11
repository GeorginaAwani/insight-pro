import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMouseOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 7.5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2a1 1 0 1 0-2 0c0 .173-.06.456-.212.666-.114.159-.314.334-.788.334-.53 0-1.034.11-1.449.398-.433.3-.661.723-.753 1.137a2.298 2.298 0 0 0-.05.562A8.002 8.002 0 0 0 4 13v2a8 8 0 1 0 16 0v-2a8 8 0 0 0-7.253-7.966v-.01C12.795 5.012 12.875 5 13 5c1.126 0 1.926-.492 2.412-1.166A3.232 3.232 0 0 0 16 2ZM11.98 7h.039A6 6 0 0 1 18 13v2a6 6 0 0 1-12 0v-2a6 6 0 0 1 5.981-6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMouseOutline)
export default Memo
