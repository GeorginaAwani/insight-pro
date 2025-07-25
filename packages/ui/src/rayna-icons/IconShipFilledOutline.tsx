import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconShipFilledOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.51 3.48a.25.25 0 0 1 .25-.25h2.478a.25.25 0 0 1 .25.25v1.609H10.51V3.48Zm8.016 5.359v1.663l-4.85-2.424a3.75 3.75 0 0 0-3.354 0l-4.85 2.425V8.838a2.25 2.25 0 0 1 2.25-2.25h8.554a2.25 2.25 0 0 1 2.25 2.25Zm-7.533.58a2.25 2.25 0 0 1 2.012 0l5.935 2.968 2.143 1.071c.82.41 1.264 1.236 1.115 2.048a14.4 14.4 0 0 1-.639 2.4c-.302.806-.68 1.497-1.137 1.959-.521.527-1.032.765-1.55.856-.54.094-1.138.037-1.842-.113-.427-.091-.83-.2-1.264-.318a42.146 42.146 0 0 0-1.04-.27c-.836-.204-1.75-.378-2.727-.378-.976 0-1.891.174-2.726.377-.379.093-.718.184-1.04.271-.435.117-.838.227-1.265.318-.704.15-1.302.207-1.841.113-.52-.09-1.03-.33-1.551-.856-.457-.462-.835-1.153-1.137-1.96a14.39 14.39 0 0 1-.64-2.4c-.148-.81.296-1.637 1.116-2.047l2.142-1.071 5.936-2.968Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconShipFilledOutline)
export default Memo
