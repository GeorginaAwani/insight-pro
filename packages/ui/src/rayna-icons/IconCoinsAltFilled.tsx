import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCoinsAltFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M22 8a6 6 0 0 1-6.253 5.995 8.014 8.014 0 0 0-5.742-5.742A6 6 0 1 1 22 8Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-6.68 2.038a2.148 2.148 0 0 0-1.358-1.359c-.653-.217-.653-1.14 0-1.358a2.148 2.148 0 0 0 1.359-1.359c.217-.653 1.14-.653 1.358 0a2.148 2.148 0 0 0 1.359 1.359c.653.217.653 1.14 0 1.358a2.148 2.148 0 0 0-1.359 1.359c-.217.653-1.14.653-1.358 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCoinsAltFilled)
export default Memo
