import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconFilterFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M3 5.281A2.281 2.281 0 0 1 5.281 3h13.438a2.281 2.281 0 0 1 1.869 3.589l-6.046 8.636a3 3 0 0 0-.542 1.72v1.426c0 .998-.564 1.911-1.457 2.358A1.757 1.757 0 0 1 10 19.157v-2.211a3 3 0 0 0-.542-1.72L3.412 6.588A2.28 2.28 0 0 1 3 5.281Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconFilterFilled)
export default Memo
