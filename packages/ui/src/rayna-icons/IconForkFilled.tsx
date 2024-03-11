import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconForkFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M4.5 4.5a2.5 2.5 0 0 0 1.52 2.3c-.013.065-.02.132-.02.2 0 1.71.567 3.429 1.586 4.739.837 1.076 2.003 1.9 3.414 2.168v2.301a2.5 2.5 0 1 0 2 0v-2.301c1.411-.268 2.577-1.092 3.414-2.168C17.434 10.429 18 8.709 18 7c0-.068-.007-.135-.02-.2a2.5 2.5 0 1 0-1.96 0c-.013.065-.02.132-.02.2 0 1.29-.433 2.571-1.164 3.511-.723.93-1.7 1.489-2.836 1.489s-2.113-.56-2.836-1.489C8.434 9.571 8 8.291 8 7c0-.068-.007-.135-.02-.2A2.5 2.5 0 1 0 4.5 4.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconForkFilled)
export default Memo
