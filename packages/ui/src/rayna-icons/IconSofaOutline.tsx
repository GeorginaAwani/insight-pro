import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSofaOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.5 8c-.537 0-1.045.12-1.5.337V8a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v.337A3.5 3.5 0 0 0 1 11.5v1c0 .756.24 1.455.647 2.027C1.249 14.893 1 15.417 1 16v1.6a2 2 0 0 0 1.88 1.996 1 1 0 0 0 1.99.004h14.26a1 1 0 0 0 1.99-.004A2 2 0 0 0 23 17.6V16c0-.583-.25-1.107-.647-1.473A3.484 3.484 0 0 0 23 12.5v-1A3.5 3.5 0 0 0 19.5 8Zm0 6a1.5 1.5 0 0 1-1.5-1.5v-1a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-1.5 1.5ZM4.499 14A1.5 1.5 0 0 1 3 12.5v-1a1.5 1.5 0 0 1 3-.002v1.004A1.5 1.5 0 0 1 4.501 14H4.5ZM3 16v1.6h18V16H3Zm5-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6H8V8Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSofaOutline)
export default Memo
