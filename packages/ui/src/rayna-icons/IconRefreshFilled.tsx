import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconRefreshFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm15-1a1 1 0 0 0-1 1v.4A7.41 7.41 0 0 0 11.666 4C7.386 4 4 7.628 4 12a1 1 0 1 0 2 0c0-3.36 2.582-6 5.666-6 1.027 0 1.993.29 2.83.8h-.163a1 1 0 1 0 0 2H17a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM8 19a1 1 0 1 1-2 0v-2.8a1 1 0 0 1 1-1h2.667a1 1 0 0 1 0 2h-.162c.835.51 1.802.8 2.829.8C15.418 18 18 15.36 18 12a1 1 0 1 1 2 0c0 4.372-3.387 8-7.666 8A7.41 7.41 0 0 1 8 18.6v.4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconRefreshFilled)
export default Memo
