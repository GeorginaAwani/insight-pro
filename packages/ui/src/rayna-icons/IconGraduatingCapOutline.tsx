import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconGraduatingCapOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.773 2.547a1.5 1.5 0 0 0-1.544 0L2.201 7.964a1.5 1.5 0 0 0 0 2.572l1.8 1.08v6.4c0 .438.193.884.584 1.177.76.57 3.667 2.557 7.416 2.557 3.749 0 6.655-1.987 7.416-2.557.39-.293.584-.74.584-1.177v-6.4l1.8-1.08a1.5 1.5 0 0 0 0-2.572l-9.028-5.417ZM3.944 9.25l8.057-4.834 8.056 4.834-3.362 2.017-3.613-2.58a1 1 0 0 0-1.162 1.627l2.905 2.075-2.824 1.695L3.944 9.25Zm11.057 5.366-2.228 1.337a1.5 1.5 0 0 1-1.544 0l-5.228-3.137v4.933c.882.617 3.184 2.001 6 2.001s5.117-1.384 6-2v-4.934l-1 .6V16a1 1 0 1 1-2 0v-1.384Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconGraduatingCapOutline)
export default Memo
