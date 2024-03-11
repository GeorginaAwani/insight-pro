import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconScissorFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M15.915 3.403a1 1 0 1 0-1.83-.806L12 7.335 9.915 2.597a1 1 0 0 0-1.83.806l2.822 6.415-2.306 5.242a3 3 0 1 0 1.71 1.026 1 1 0 0 0 .104-.183L12 12.3l1.585 3.602a1 1 0 0 0 .105.183 3 3 0 1 0 1.71-1.026l-2.308-5.242 2.823-6.415Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconScissorFilled)
export default Memo
