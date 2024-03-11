import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconKeyboardFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 4.5a1 1 0 1 0-2 0c0 .173-.06.456-.212.666-.114.159-.314.334-.788.334-.53 0-1.034.11-1.449.398-.433.3-.661.723-.753 1.137-.115.525-.018 1.054.121 1.465H6a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3h-5a.996.996 0 0 0-.106-.447 1.567 1.567 0 0 1-.126-.356.86.86 0 0 1-.02-.173c.047-.012.127-.024.252-.024 1.126 0 1.926-.492 2.412-1.166A3.232 3.232 0 0 0 16 4.5ZM6 11a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H6Zm4 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm6-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm3 5a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM7 17a1 1 0 1 0 0-2H6a1 1 0 1 0 0 2h1Zm2-1a1 1 0 0 1 1-1h4.5a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconKeyboardFilled)
export default Memo
