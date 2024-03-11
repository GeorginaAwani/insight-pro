import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconTargetFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M21 2a1 1 0 1 0-2 0v1.586l-6.563 6.563a1 1 0 0 0-1.937.351v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .35-1.937L20.415 5H22a1 1 0 1 0 0-2h-1V2Z"
      fill="currentColor"
    />
    <path
      d="M12 2c2.038 0 3.934.61 5.515 1.657L15.33 5.84a7 7 0 1 0 2.828 2.828l2.185-2.184A9.954 9.954 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z"
      fill="currentColor"
    />
    <path
      d="M12 7c.645 0 1.261.122 1.827.344l-1.389 1.39A2 2 0 0 0 9.5 10.5v1.999a2 2 0 0 0 2 2h2a2 2 0 0 0 1.767-2.938l1.389-1.39A5 5 0 1 1 12 7Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconTargetFilled)
export default Memo
