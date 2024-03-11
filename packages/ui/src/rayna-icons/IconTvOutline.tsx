import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconTvOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6.5 8a1 1 0 0 0 0 2h1v3a1 1 0 1 0 2 0v-3h1a1 1 0 1 0 0-2h-4ZM13.053 8.106a1 1 0 0 1 1.341.447l1.106 2.21 1.106-2.21a1 1 0 1 1 1.788.894l-2 4a1 1 0 0 1-1.788 0l-2-4a1 1 0 0 1 .447-1.341Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h5.5a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2H19a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H5ZM3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconTvOutline)
export default Memo
