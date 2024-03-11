import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconThermometerFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 16.823C17 19.681 14.761 22 12 22s-5-2.318-5-5.177a5.23 5.23 0 0 1 2.059-4.188.714.714 0 0 0 .294-.565V4.647a2.647 2.647 0 0 1 5.294 0v7.423c0 .224.115.43.294.565A5.23 5.23 0 0 1 17 16.823ZM13 5a1 1 0 1 0-2 0v11a1 1 0 1 0 2 0V5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconThermometerFilled)
export default Memo
