import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMouseFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 2a1 1 0 1 0-2 0c0 .173-.06.456-.212.666-.114.159-.314.334-.788.334-.53 0-1.034.11-1.449.398-.433.3-.661.723-.753 1.137-.123.56-.005 1.123.15 1.544A7.002 7.002 0 0 0 5 13v2a7 7 0 1 0 14 0v-2a7.002 7.002 0 0 0-6.002-6.93.995.995 0 0 0-.104-.517 1.567 1.567 0 0 1-.126-.356.86.86 0 0 1-.02-.173C12.794 5.012 12.874 5 13 5c1.126 0 1.926-.492 2.412-1.166A3.232 3.232 0 0 0 16 2Zm-4 5.5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMouseFilled)
export default Memo
