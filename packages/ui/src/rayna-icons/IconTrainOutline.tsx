import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconTrainOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 10a6 6 0 1 1 12 0v3a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-3Zm6-4a4 4 0 0 0-4 4v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a4 4 0 0 0-4-4Z"
      fill="currentColor"
    />
    <path d="M10 17a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 10a9 9 0 0 1 18 0v6a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-6Zm9-7a7 7 0 0 0-7 7v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-6a7 7 0 0 0-7-7Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconTrainOutline)
export default Memo
