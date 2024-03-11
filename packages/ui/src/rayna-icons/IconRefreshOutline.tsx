import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconRefreshOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M17 4a1 1 0 1 1 2 0v3.2a1 1 0 0 1-1 1h-3.112a1 1 0 0 1 0-2h.685A6.596 6.596 0 0 0 11.777 5C8.061 5 5 8.107 5 12a1 1 0 1 1-2 0c0-4.944 3.903-9 8.777-9 1.96 0 3.766.659 5.223 1.766V4ZM7 20a1 1 0 1 1-2 0v-3.2a1 1 0 0 1 1-1h3.112a1 1 0 1 1 0 2h-.685a6.596 6.596 0 0 0 3.796 1.2C15.939 19 19 15.893 19 12a1 1 0 1 1 2 0c0 4.944-3.903 9-8.777 9A8.596 8.596 0 0 1 7 19.234V20Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconRefreshOutline)
export default Memo
