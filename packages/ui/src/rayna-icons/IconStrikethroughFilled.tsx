import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconStrikethroughFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M18 3H9.5a4.5 4.5 0 0 0-4.307 5.806M13.5 12a4.5 4.5 0 1 1 0 9H5M3 12h18"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Memo = memo(SvgIconStrikethroughFilled)
export default Memo
