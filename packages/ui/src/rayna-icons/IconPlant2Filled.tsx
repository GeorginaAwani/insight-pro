import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPlant2Filled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 1a1 1 0 0 1 1 1v6.653C14.084 7.259 16.192 6 20 6c-1.105 3.452-4.672 4.835-7 5.22V12h4.81a1 1 0 0 1 .985 1.172l-1.4 8a1 1 0 0 1-.985.828H7.59a1 1 0 0 1-.985-.828l-1.4-8A1 1 0 0 1 6.19 12H11V8.22C8.672 7.836 5.105 6.453 4 3c3.808 0 5.917 1.259 7 2.653V2a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPlant2Filled)
export default Memo
