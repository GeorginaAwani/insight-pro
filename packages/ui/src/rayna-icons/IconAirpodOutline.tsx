import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconAirpodOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.5 19.5a2.5 2.5 0 0 1-5 0v-4.81c0-1.428-.607-2.79-1.669-3.747l-.763-.687A4.736 4.736 0 0 1 2.5 6.736v-.588a4.148 4.148 0 0 1 7.774-2.015l.489.88c.483.871.737 1.85.737 2.846V19.5Zm-7-13.352a2.148 2.148 0 0 1 4.025-1.043l.49.88A3.86 3.86 0 0 1 9.5 7.859V19.5a.5.5 0 0 1-1 0v-4.81a7.042 7.042 0 0 0-2.331-5.233l-.763-.687A2.736 2.736 0 0 1 4.5 6.736v-.588ZM12.5 19.5a2.5 2.5 0 0 0 5 0v-4.81c0-1.428.607-2.79 1.669-3.747l.763-.687a4.736 4.736 0 0 0 1.568-3.52v-.588a4.148 4.148 0 0 0-7.774-2.015l-.489.88A5.86 5.86 0 0 0 12.5 7.86V19.5Zm7-13.352a2.148 2.148 0 0 0-4.025-1.043l-.49.88a3.86 3.86 0 0 0-.485 1.874V19.5a.5.5 0 0 0 1 0v-4.81c0-1.995.847-3.898 2.331-5.233l.763-.687a2.736 2.736 0 0 0 .906-2.034v-.588Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconAirpodOutline)
export default Memo
