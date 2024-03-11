import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconTicketOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M8 6.5a1 1 0 0 0-2 0v2a1 1 0 1 0 2 0v-2ZM7 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM8 15.5a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.5 17v-.292a4 4 0 0 0-.423-1.789l-.904-1.809a2 2 0 0 1 .124-2.004l.53-.796a4 4 0 0 0 .673-2.218V7a4 4 0 0 0-4-4H4.874A3.979 3.979 0 0 0 1.5 9.087l1.158 1.853a2 2 0 0 1 0 2.12l-1.05 1.68A4 4 0 0 0 1 16.86V17a4 4 0 0 0 4 4h13.5a4 4 0 0 0 4-4Zm-2-.292V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-.14a2 2 0 0 1 .304-1.06l1.05-1.68a4 4 0 0 0 0-4.24L3.196 8.027A1.979 1.979 0 0 1 4.874 5H18.5a2 2 0 0 1 2 2v1.092a2 2 0 0 1-.336 1.11l-.53.795a4 4 0 0 0-.25 4.007l.904 1.81a2 2 0 0 1 .212.894Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconTicketOutline)
export default Memo
