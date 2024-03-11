import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconForwardFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m5.398 7.677 5.686 2.841c.61.305.916.893.916 1.48v-2.84a1.657 1.657 0 0 1 2.398-1.481l5.686 2.841c1.221.61 1.221 2.353 0 2.964l-5.686 2.841A1.657 1.657 0 0 1 12 14.841v-2.84c0 .588-.306 1.176-.916 1.48l-5.686 2.842A1.657 1.657 0 0 1 3 14.841V9.16a1.657 1.657 0 0 1 2.398-1.482Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconForwardFilled)
export default Memo
