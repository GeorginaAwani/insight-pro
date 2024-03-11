import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconRepeatOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M18.631 2.224a1 1 0 0 0-1.262 1.552l.817.664H9.56A7.56 7.56 0 0 0 2 12a1 1 0 1 0 2 0 5.56 5.56 0 0 1 5.56-5.56h8.979l-1.237 1.203a1 1 0 1 0 1.396 1.434l3-2.92a1 1 0 0 0-.067-1.493l-3-2.44ZM5.369 21.776a1 1 0 0 0 1.262-1.552l-.817-.664h8.626A7.56 7.56 0 0 0 22 12a1 1 0 1 0-2 0 5.56 5.56 0 0 1-5.56 5.56H5.461l1.236-1.203a1 1 0 0 0-1.394-1.434l-3 2.92a1 1 0 0 0 .066 1.493l3 2.44Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconRepeatOutline)
export default Memo
