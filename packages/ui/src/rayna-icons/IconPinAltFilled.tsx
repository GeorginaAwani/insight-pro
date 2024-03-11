import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPinAltFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14.446 3.34 3.464 2a3 3 0 0 1 1.098 4.098l-2.046 3.543a3 3 0 0 0-.395 1.693l.109 1.694c.077 1.196-1.21 1.995-2.247 1.396l-3.635-2.1v.001l-3.75 6.495a1 1 0 1 1-1.732-1l3.75-6.495-3.635-2.098c-1.037-.6-.989-2.113.085-2.644l1.522-.752a3 3 0 0 0 1.268-1.19l2.046-3.543a3 3 0 0 1 4.098-1.098Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPinAltFilled)
export default Memo
