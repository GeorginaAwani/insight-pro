import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconKeyboardOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M5 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1ZM11 11a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM15 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM18 17a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1ZM8 16a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM10 15a1 1 0 1 0 0 2h4.5a1 1 0 1 0 0-2H10Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 4.5a1 1 0 1 0-2 0c0 .173-.06.456-.212.666-.114.159-.314.334-.788.334-.53 0-1.034.11-1.449.398-.433.3-.661.723-.753 1.137-.034.156-.05.312-.05.465H6a4 4 0 0 0-4 4v5a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-5a4 4 0 0 0-4-4h-5c1.126 0 1.926-.492 2.412-1.166A3.232 3.232 0 0 0 16 4.5Zm-4.02 5H18a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h5.98Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconKeyboardOutline)
export default Memo
