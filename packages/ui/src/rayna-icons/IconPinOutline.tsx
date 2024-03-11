import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPinOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 1a4 4 0 0 0-4 4v4.092a2 2 0 0 1-.336 1.11l-.941 1.411c-1.108 1.662.083 3.887 2.08 3.887H11V22a1 1 0 1 0 2 0v-6.5h4.198c1.996 0 3.187-2.225 2.08-3.887l-.942-1.412A2 2 0 0 1 18 9.091V5a4 4 0 0 0-4-4h-4Zm7.198 12.5a.5.5 0 0 0 .415-.777l-.94-1.413A4 4 0 0 1 16 9.092V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4.092a4 4 0 0 1-.672 2.218l-.941 1.413a.5.5 0 0 0 .416.777h10.395Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPinOutline)
export default Memo
