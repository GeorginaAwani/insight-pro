import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconRadioButtonFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconRadioButtonFilled)
export default Memo
