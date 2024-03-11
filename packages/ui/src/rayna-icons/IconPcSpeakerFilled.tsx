import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPcSpeakerFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M15.25 4.4h-10a3 3 0 0 0-3 3v6.8a3 3 0 0 0 3 3h4v1.4H8a1 1 0 1 0 0 2h4.5a1 1 0 0 0 0-2h-1.25v-1.4h2.169l.272-5.328A2.5 2.5 0 0 1 16.188 9.5h2.062V7.4a3 3 0 0 0-3-3Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.598 10.25h-3.195a2 2 0 0 0-1.998 1.9l-.3 6a2 2 0 0 0 1.997 2.1h3.796a2 2 0 0 0 1.997-2.1l-.3-6a2 2 0 0 0-1.997-1.9Zm-.348 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM18 18.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPcSpeakerFilled)
export default Memo
