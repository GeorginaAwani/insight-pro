import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCalendarRemoveFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M8 2a1 1 0 0 1 1 1v1.5H7V3a1 1 0 0 1 1-1ZM15 5H9v1a1 1 0 0 1-2 0V5H6a3 3 0 0 0-3 3v.5h18V8a3 3 0 0 0-3-3h-1v1a1 1 0 1 1-2 0V5ZM3 10.5V19a3 3 0 0 0 3 3h9.17A3 3 0 0 1 18 18h3v-7.5H3ZM17 3a1 1 0 1 0-2 0v1.5h2V3Z"
      fill="currentColor"
    />
    <path d="M18 20a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z" fill="currentColor" />
  </svg>
)
const Memo = memo(SvgIconCalendarRemoveFilled)
export default Memo
