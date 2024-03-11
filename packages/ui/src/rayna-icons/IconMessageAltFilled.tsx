import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMessageAltFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.277 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9.297a3 3 0 0 1 .395-1.489l.75-1.312A1 1 0 0 0 20.277 5ZM6 10a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2H7Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMessageAltFilled)
export default Memo
