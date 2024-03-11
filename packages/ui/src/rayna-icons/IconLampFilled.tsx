import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconLampFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m4.91 3.9-.8 8a1 1 0 0 0 .995 1.1H11v7H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-7h5.895a1 1 0 0 0 .995-1.1l-.8-8a1 1 0 0 0-.995-.9H5.905a1 1 0 0 0-.995.9Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconLampFilled)
export default Memo
