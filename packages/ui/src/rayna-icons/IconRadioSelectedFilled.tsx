import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconRadioSelectedFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M7 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-16a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconRadioSelectedFilled)
export default Memo
