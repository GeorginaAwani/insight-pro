import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPencilEditFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-6a1 1 0 1 0-2 0v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2.684a1 1 0 1 0 0-2H6Z"
      fill="currentColor"
    />
    <path
      d="m6.806 15.57.247-1.73a3 3 0 0 1 .848-1.697l7.303-7.303 3.462 3.462-7.303 7.303a3 3 0 0 1-1.697.848l-1.729.248a1 1 0 0 1-1.131-1.132ZM20.07 6.877 16.63 3.436a2.449 2.449 0 0 1 3.441 3.441Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPencilEditFilled)
export default Memo
