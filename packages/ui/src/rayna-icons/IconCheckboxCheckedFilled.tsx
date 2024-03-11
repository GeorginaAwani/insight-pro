import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCheckboxCheckedFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm9.718 5.696a1 1 0 0 0-1.436-1.392l-5.105 5.26-1.46-1.503a1 1 0 0 0-1.435 1.393l2.177 2.242a1 1 0 0 0 1.435 0l5.824-6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCheckboxCheckedFilled)
export default Memo
