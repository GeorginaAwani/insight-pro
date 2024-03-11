import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconTrainFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 16a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-6a8 8 0 1 1 16 0v6Zm-3-3v-3a5 5 0 0 0-10 0v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2Zm-7 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconTrainFilled)
export default Memo
