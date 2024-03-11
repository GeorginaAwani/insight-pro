import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconEthFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m5.757 10.217 6.105 1.744c.09.025.185.025.275 0l6.104-1.744a.5.5 0 0 0 .24-.81L12.375 2.43a.5.5 0 0 0-.753 0L5.519 9.407a.5.5 0 0 0 .238.81ZM11.597 21.454 5.869 13.68a.5.5 0 0 1 .54-.777l5.453 1.558c.09.025.185.025.275 0l5.453-1.558a.5.5 0 0 1 .54.777l-5.728 7.774a.5.5 0 0 1-.805 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconEthFilled)
export default Memo
