import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChatsFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 14a7 7 0 0 1-8.736 6.783l-4.36-.545a.875.875 0 0 1-.754-1.012l.267-1.6a.875.875 0 0 0 .005-.253l-.205-1.637A7 7 0 1 1 17 14ZM6 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm5 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 8a5 5 0 0 0-9.413-2.352A8.507 8.507 0 0 1 18.4 12.7l1.953-.244a.625.625 0 0 0 .539-.723l-.19-1.143a.623.623 0 0 1-.004-.18l.146-1.17C20.946 8.844 21 8.428 21 8Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChatsFilled)
export default Memo
