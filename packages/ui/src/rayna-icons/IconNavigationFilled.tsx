import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconNavigationFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M10.632 5.04 4.358 18.983c-.53 1.176.573 2.427 1.806 2.05l5.398-1.65a1.5 1.5 0 0 1 .876 0l5.398 1.65c1.233.377 2.336-.874 1.806-2.05L13.368 5.04c-.53-1.18-2.205-1.18-2.736 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconNavigationFilled)
export default Memo
