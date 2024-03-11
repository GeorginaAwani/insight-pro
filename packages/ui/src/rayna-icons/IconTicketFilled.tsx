import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconTicketFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.875 4H18.5a3 3 0 0 1 3 3v1.092a3 3 0 0 1-.503 1.664l-.53.795a3 3 0 0 0-.188 3.006l.905 1.81a3 3 0 0 1 .316 1.341V17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-.14a3 3 0 0 1 .456-1.59l1.05-1.68a3 3 0 0 0 0-3.18L2.35 8.557A2.979 2.979 0 0 1 4.875 4ZM8 6.5a1 1 0 0 0-2 0v2a1 1 0 1 0 2 0v-2ZM7 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Zm1 5.5a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconTicketFilled)
export default Memo
