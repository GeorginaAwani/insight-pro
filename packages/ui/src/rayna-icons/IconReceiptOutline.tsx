import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconReceiptOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M8 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8ZM7 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM8 16a1 1 0 1 0 0 2h2.667a1 1 0 1 0 0-2H8ZM13.333 16a1 1 0 1 0 0 2H16a1 1 0 1 0 0-2h-2.667Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.482 21.901c.112.028.221.069.325.12C18.193 23.215 21 21.48 21 18.813V5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v13.812c0 2.668 2.807 4.402 5.193 3.21a1.59 1.59 0 0 1 .325-.12l2.997-.75a2 2 0 0 1 .97 0l2.997.75ZM5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v13.812a1.588 1.588 0 0 1-2.299 1.42 3.591 3.591 0 0 0-.734-.271l-2.997-.75a3.998 3.998 0 0 0-1.94 0l-2.997.75c-.254.063-.5.155-.734.272A1.588 1.588 0 0 1 5 18.812V5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconReceiptOutline)
export default Memo
