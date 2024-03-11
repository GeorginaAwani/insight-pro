import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconTissueFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 6.5c0 1.933-3.358 3.5-7.5 3.5C6.358 10 3 8.433 3 6.5S6.358 3 10.5 3C14.642 3 18 4.567 18 6.5Zm-9.5 0c0 .552.895 1 2 1s2-.448 2-1-.895-1-2-1-2 .448-2 1Z"
      fill="currentColor"
    />
    <path
      d="M10.5 11.5c2.987 0 5.668-.655 7.5-1.693V10h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-9.5C6.358 21 3 19.433 3 17.5V9.807c1.832 1.038 4.513 1.693 7.5 1.693Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconTissueFilled)
export default Memo
