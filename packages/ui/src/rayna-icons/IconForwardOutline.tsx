import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconForwardOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.845 6.783C4.08 5.9 2 7.183 2 9.159v5.682c0 1.976 2.08 3.26 3.845 2.377L11 14.642v.2c0 1.975 2.08 3.258 3.845 2.376l5.686-2.842c1.959-.979 1.959-3.773 0-4.752l-5.685-2.841C13.079 5.9 11 7.183 11 9.159v.2L5.845 6.783ZM13 14.84c0 .488.514.806.951.588l5.686-2.842a.656.656 0 0 0 0-1.174L13.95 8.572a.657.657 0 0 0-.951.587v5.682ZM11 12a.649.649 0 0 0-.363-.586L4.95 8.572A.657.657 0 0 0 4 9.159v5.682c0 .488.514.806.951.588l5.686-2.842a.649.649 0 0 0 .363-.586v-.002Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconForwardOutline)
export default Memo
