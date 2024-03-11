import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconDataOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 6.83a3.001 3.001 0 1 0-2 0V11H7a4 4 0 0 0-4 4v2.17a3.001 3.001 0 1 0 2 0V15a2 2 0 0 1 2-2h4v4.17a3.001 3.001 0 1 0 2 0V13h4a2 2 0 0 1 2 2v2.17a3.001 3.001 0 1 0 2 0V15a4 4 0 0 0-4-4h-4V6.83ZM12 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-8 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-8 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconDataOutline)
export default Memo
