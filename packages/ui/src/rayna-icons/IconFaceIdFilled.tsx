import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconFaceIdFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6 2a4 4 0 0 0-4 4v2a1 1 0 0 0 2 0V6a2 2 0 0 1 2-2h2a1 1 0 0 0 0-2H6ZM18 2a4 4 0 0 1 4 4v2a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2h-2a1 1 0 1 1 0-2h2ZM2 18a4 4 0 0 0 4 4h2a1 1 0 1 0 0-2H6a2 2 0 0 1-2-2v-2a1 1 0 1 0-2 0v2ZM18 22a4 4 0 0 0 4-4v-2a1 1 0 1 0-2 0v2a2 2 0 0 1-2 2h-2a1 1 0 1 0 0 2h2ZM6.75 8.25a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0ZM16 9.5A1.25 1.25 0 1 1 16 7a1.25 1.25 0 0 1 0 2.5ZM9.106 15.553a1 1 0 0 1 1.341-.447 3.473 3.473 0 0 0 3.106 0 1 1 0 1 1 .894 1.788c-1.54.77-3.354.77-4.894 0a1 1 0 0 1-.447-1.341ZM12.894 10.053a1 1 0 1 0-1.788.894l.527 1.055A1 1 0 0 0 12.5 13.5h.176a1.2 1.2 0 0 0 1.074-1.737l-.856-1.71Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconFaceIdFilled)
export default Memo
