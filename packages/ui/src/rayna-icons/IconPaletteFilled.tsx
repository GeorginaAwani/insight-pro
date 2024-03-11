import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPaletteFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 20.5C.5 17.5-1.077 3.545 12 3c12-.5 12 14.5 7.5 14.5-1.047 0-1.827-.119-2.407-.304-.429-.137-.91-.397-1.405-.664-1.083-.584-2.235-1.206-3.058-.669-.804.525-1.201 1.352-.13 2.637 3.2 3.841-3.168 3.167-5.5 2Zm9.5-9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM11 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-3.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPaletteFilled)
export default Memo
