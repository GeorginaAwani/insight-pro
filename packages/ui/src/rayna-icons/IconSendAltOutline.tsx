import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSendAltOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.525 12.836a2.5 2.5 0 0 0 2.488.665 2.5 2.5 0 0 0-.668 2.487l1.116 3.901c.574 2.008 3.211 2.468 4.432.774l9.064-12.58c1.26-1.748-.136-4.165-2.28-3.948L4.25 5.694c-2.078.21-2.998 2.724-1.546 4.225l2.82 2.917Zm3.946 2.049 9.853-6.569-8.054 11.178a.5.5 0 0 1-.886-.155l-1.116-3.9a.5.5 0 0 1 .203-.554Zm-1.927-3.339 10.615-5.248L4.452 7.684l-.1-.995.1.995a.5.5 0 0 0-.31.845l2.82 2.917a.5.5 0 0 0 .582.1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSendAltOutline)
export default Memo
