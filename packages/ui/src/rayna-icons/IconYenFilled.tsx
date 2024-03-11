import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconYenFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M7.814 3.919A1 1 0 0 0 6.186 5.08L11 11.821V12H8a1 1 0 1 0 0 2h3v.5H8a1 1 0 1 0 0 2h3v4a1 1 0 1 0 2 0v-4h3a1 1 0 1 0 0-2h-3V14h3a1 1 0 1 0 0-2h-3v-.18l4.814-6.739a1 1 0 0 0-1.628-1.162L12 9.779 7.814 3.92Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconYenFilled)
export default Memo
