import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPreviousFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M3 6a1 1 0 0 0-1 1v11a1 1 0 1 0 2 0v-3.976l5.602 2.799A1.657 1.657 0 0 0 12 15.341v-2.84c0 .588.306 1.176.916 1.48l5.686 2.842A1.657 1.657 0 0 0 21 15.341V9.66a1.657 1.657 0 0 0-2.398-1.482l-5.686 2.841c-.61.305-.916.893-.916 1.48v-2.84a1.657 1.657 0 0 0-2.398-1.481L4 10.977V7a1 1 0 0 0-1-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPreviousFilled)
export default Memo
