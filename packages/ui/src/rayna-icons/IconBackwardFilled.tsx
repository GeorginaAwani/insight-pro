import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBackwardFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m9.602 7.477-5.686 2.841c-1.221.61-1.221 2.353 0 2.964l5.686 2.841A1.657 1.657 0 0 0 12 14.641v-2.839c0 .588.306 1.175.916 1.48l5.686 2.841A1.657 1.657 0 0 0 21 14.641V8.96a1.657 1.657 0 0 0-2.398-1.482l-5.686 2.841c-.61.305-.915.892-.916 1.48v-2.84a1.657 1.657 0 0 0-2.398-1.48Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBackwardFilled)
export default Memo
