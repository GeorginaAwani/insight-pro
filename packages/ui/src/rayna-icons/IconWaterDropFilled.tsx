import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconWaterDropFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M11.526 3.423 7.782 14.655a4 4 0 0 0 .966 4.093l.424.424a4 4 0 0 0 5.656 0l.424-.424a4 4 0 0 0 .966-4.093L12.474 3.423a.5.5 0 0 0-.948 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconWaterDropFilled)
export default Memo
