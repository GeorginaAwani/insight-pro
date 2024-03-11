import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconTvFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm1.5 5a1 1 0 0 0 0 2h1v3a1 1 0 1 0 2 0v-3h1a1 1 0 1 0 0-2h-4Zm6.553.106a1 1 0 0 1 1.341.447l1.106 2.21 1.106-2.21a1 1 0 1 1 1.788.894l-2 4a1 1 0 0 1-1.788 0l-2-4a1 1 0 0 1 .447-1.341Z"
      fill="currentColor"
    />
    <path d="M10.5 20a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z" fill="currentColor" />
  </svg>
)
const Memo = memo(SvgIconTvFilled)
export default Memo
