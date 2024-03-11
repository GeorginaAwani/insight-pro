import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconNextFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M21 5.5a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0v-3.976l-5.602 2.799A1.657 1.657 0 0 1 12 14.841v-2.84c0 .588-.306 1.176-.916 1.48l-5.686 2.842A1.657 1.657 0 0 1 3 14.841V9.16a1.657 1.657 0 0 1 2.398-1.482l5.686 2.841c.61.305.916.893.916 1.48v-2.84a1.657 1.657 0 0 1 2.398-1.481l5.602 2.8V6.5a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconNextFilled)
export default Memo
