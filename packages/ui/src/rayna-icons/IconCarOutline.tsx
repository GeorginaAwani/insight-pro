import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCarOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 21a2 2 0 0 1-2-2v-1H9v1a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2v-1.208A2.5 2.5 0 0 1 1 15.5V12c0-.447.146-.86.394-1.192l-.101-.1a1 1 0 0 1 1.263-1.54l1.04-3.117A3 3 0 0 1 6.441 4h11.116a3 3 0 0 1 2.846 2.051l1.04 3.118a1 1 0 0 1 1.263 1.538l-.1.101c.247.333.393.745.393 1.192v3.5a2.5 2.5 0 0 1-1.5 2.292V19a2 2 0 0 1-2 2H17ZM5.493 6.684A1 1 0 0 1 6.442 6h11.116a1 1 0 0 1 .95.684L19.612 10H4.387l1.106-3.316ZM3.5 16a.5.5 0 0 1-.5-.5V12h18v3.5a.5.5 0 0 1-.5.5h-17ZM17 18h2.5v1H17v-1ZM4.5 18H7v1H4.5v-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCarOutline)
export default Memo
