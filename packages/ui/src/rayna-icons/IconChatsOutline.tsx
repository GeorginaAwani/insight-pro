import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChatsOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM9 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM14 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m20.478 13.448-2.482.31a8 8 0 0 1-9.917 8.01L3.78 21.23a1.875 1.875 0 0 1-1.617-2.168l.264-1.583-.195-1.558a8 8 0 0 1 8.107-9.914 6.002 6.002 0 0 1 11.49 3.417l-.131 1.055.181 1.09a1.625 1.625 0 0 1-1.401 1.879ZM16 4a4 4 0 0 1 3.876 4.993l-.016.06-.154 1.233c-.019.155-.016.313.01.468l.126.758-2.154.27a8.018 8.018 0 0 0-5.334-5.43A4.002 4.002 0 0 1 16 4Zm-6 4a6 6 0 0 0-5.814 7.49l.016.06.212 1.7c.022.18.019.361-.011.54l-.245 1.472 4.292.537.06.015A6 6 0 1 0 10 8Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChatsOutline)
export default Memo
