import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconNavigationOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.544 5.45a.5.5 0 0 1 .912 0l6.274 13.944a.5.5 0 0 1-.602.683l-5.398-1.65a2.5 2.5 0 0 0-1.46 0l-5.398 1.65a.5.5 0 0 1-.603-.683L11.544 5.45Zm2.736-.82c-.885-1.966-3.675-1.966-4.56 0L3.446 18.572c-.882 1.96.955 4.044 3.01 3.417l5.398-1.65a.5.5 0 0 1 .292 0l5.398 1.65c2.055.628 3.892-1.458 3.01-3.417L14.28 4.629Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconNavigationOutline)
export default Memo
