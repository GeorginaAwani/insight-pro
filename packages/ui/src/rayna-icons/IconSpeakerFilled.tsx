import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSpeakerFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM10 16a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.147 2H7.854a3 3 0 0 0-2.996 2.85l-.7 14A3 3 0 0 0 7.154 22h9.693a3 3 0 0 0 2.996-3.15l-.7-14A3 3 0 0 0 16.147 2ZM8.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm3.5 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSpeakerFilled)
export default Memo
