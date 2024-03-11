import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPencilFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m4.434 16.672-.377 2.64a1 1 0 0 0 1.132 1.131l2.64-.377a3 3 0 0 0 1.696-.848l9.268-9.268-4.242-4.243-9.268 9.268a3 3 0 0 0-.849 1.697ZM15.966 4.294l4.24 4.24a3 3 0 0 0-4.24-4.24Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPencilFilled)
export default Memo
