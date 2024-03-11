import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMergeFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M4.5 4.5a2.5 2.5 0 0 0 1.52 2.3c-.013.065-.02.132-.02.2v9.208a2.5 2.5 0 1 0 2 0V13.42c.302.539.632 1.074.986 1.593.882 1.294 1.933 2.517 3.092 3.427C13.228 19.343 14.567 20 16 20a2.5 2.5 0 1 0-.442-2.036c-.7-.11-1.456-.478-2.245-1.097-.95-.747-1.869-1.799-2.674-2.98a19.367 19.367 0 0 1-1.937-3.612C8.227 9.09 8 8.112 8 7.5V7c0-.068-.007-.135-.02-.2A2.5 2.5 0 1 0 4.5 4.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMergeFilled)
export default Memo
