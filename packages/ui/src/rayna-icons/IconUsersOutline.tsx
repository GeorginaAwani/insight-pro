import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconUsersOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 3a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-4 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
      fill="currentColor"
    />
    <path
      d="M8.155 20.527a1 1 0 1 1-1.7-1.054C7.826 17.266 10.628 15 14 15s6.175 2.266 7.544 4.473a1 1 0 1 1-1.7 1.054C18.723 18.718 16.485 17 14 17c-2.484 0-4.722 1.718-5.845 3.527ZM7.898 6.56a1 1 0 0 1-.458 1.338C6.532 8.343 6 9.152 6 10c0 .848.532 1.657 1.44 2.102a1 1 0 0 1-.88 1.796C5.083 13.174 4 11.733 4 10c0-1.734 1.083-3.174 2.56-3.898a1 1 0 0 1 1.338.458ZM4.155 20.527a1 1 0 1 1-1.7-1.054c.58-.934 1.507-1.713 2.54-2.317a1 1 0 0 1 1.01 1.726c-.864.505-1.5 1.08-1.85 1.645Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconUsersOutline)
export default Memo
