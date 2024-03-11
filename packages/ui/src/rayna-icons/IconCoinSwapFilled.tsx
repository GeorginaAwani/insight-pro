import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCoinSwapFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2 9a1 1 0 1 0 2 0c0-2.01.661-3.233 1.434-3.958.215-.202.446-.37.682-.51l-.01.02a1 1 0 0 0 1.788.895l1-2a1 1 0 0 0-.447-1.341l-2-1a1 1 0 0 0-1.159 1.597 5.85 5.85 0 0 0-1.222.88C2.84 4.733 2 6.511 2 9ZM22 8a6 6 0 0 1-6.253 5.995 8.014 8.014 0 0 0-5.742-5.742A6 6 0 1 1 22 8Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-6.68 2.038a2.148 2.148 0 0 0-1.358-1.359c-.653-.217-.653-1.14 0-1.358a2.148 2.148 0 0 0 1.359-1.359c.217-.653 1.14-.653 1.358 0a2.148 2.148 0 0 0 1.359 1.359c.653.217.653 1.14 0 1.358a2.148 2.148 0 0 0-1.359 1.359c-.217.653-1.14.653-1.358 0Z"
      fill="currentColor"
    />
    <path
      d="M21 14a1 1 0 0 1 1 1c0 2.49-.839 4.267-2.066 5.417-.383.36-.797.65-1.222.88a1 1 0 0 1-1.16 1.597l-2-1a1 1 0 0 1-.446-1.341l1-2a1 1 0 1 1 1.788.894l-.01.02c.236-.138.467-.307.682-.509C19.34 18.234 20 17.011 20 15a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCoinSwapFilled)
export default Memo
