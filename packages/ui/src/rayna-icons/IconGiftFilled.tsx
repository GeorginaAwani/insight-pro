import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconGiftFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 5h2.73c.077-2.069 2.697-3.6 4.572-1.895L12.5 4.194l1.198-1.09C15.573 1.402 18.193 2.932 18.27 5H20a2 2 0 0 1 2 2v1.889C22 9.502 21.503 10 20.889 10H3.11A1.111 1.111 0 0 1 2 8.889V7a2 2 0 0 1 2-2Zm6.413 0H8.757c.084-.502.73-.842 1.2-.415l.456.415Zm5.83 0c-.084-.502-.73-.842-1.2-.415L14.588 5h1.656Z"
      fill="currentColor"
    />
    <path
      d="M9.5 13.688V12H3.111v7a3 3 0 0 0 3 3H17.89a3 3 0 0 0 3-3v-7H14.5v1.688c0 .931-1.078 1.45-1.806.867a1.112 1.112 0 0 0-1.388 0 1.111 1.111 0 0 1-1.806-.867Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconGiftFilled)
export default Memo
