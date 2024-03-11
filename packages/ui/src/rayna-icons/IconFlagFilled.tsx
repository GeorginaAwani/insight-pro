import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconFlagFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M7 2.5a1 1 0 0 0-2 0v19a1 1 0 1 0 2 0v-8.995c4.383 1.169 7.268 1.855 11.566 1.239.694-.1 1.035-.882.663-1.477L17.5 9.5l.895-2.387c.27-.718-.341-1.481-1.106-1.417-2.295.19-6.36.27-8.789-1.196-.482-.29-1.036-.725-1.5-1.114V2.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconFlagFilled)
export default Memo
