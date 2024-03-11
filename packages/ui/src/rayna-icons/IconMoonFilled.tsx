import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMoonFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M14.54 2.326c.422.11.313.76-.111.861C11.365 3.92 9 6.71 9 10a7 7 0 0 0 11.514 5.35c.333-.28.915.019.75.423A10.003 10.003 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2c.878 0 1.73.113 2.54.326Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMoonFilled)
export default Memo
