import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSwitchDiagonalFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm8.586 15.778a1 1 0 0 1-1-1v-4.242a1 1 0 1 1 2 0v1.828l7.485-7.485a1 1 0 1 1 1.414 1.414L13 18.778h1.829a1 1 0 1 1 0 2h-4.243Zm2.828-17.556a1 1 0 0 1 1 1v4.242a1 1 0 1 1-2 0V6.636L4.93 14.121a1 1 0 1 1-1.414-1.414L11 5.222H9.172a1 1 0 1 1 0-2h4.242Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSwitchDiagonalFilled)
export default Memo
