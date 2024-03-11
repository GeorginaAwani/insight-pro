import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconRepeatOnceOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M17.224 2.369a1 1 0 0 1 1.407-.145l3 2.44a1 1 0 0 1 .067 1.493l-3 2.92a1 1 0 0 1-1.396-1.434L18.54 6.44H9.56A5.56 5.56 0 0 0 4 12a1 1 0 1 1-2 0 7.56 7.56 0 0 1 7.56-7.56h8.626l-.817-.664a1 1 0 0 1-.145-1.407ZM6.776 21.631a1 1 0 0 1-1.407.145l-3-2.44a1 1 0 0 1-.066-1.493l3-2.92a1 1 0 1 1 1.394 1.434L5.461 17.56h8.979A5.56 5.56 0 0 0 20 12a1 1 0 1 1 2 0 7.56 7.56 0 0 1-7.56 7.56H5.814l.817.664a1 1 0 0 1 .145 1.407Z"
      fill="currentColor"
    />
    <path
      d="M12.754 9.848a1.12 1.12 0 0 0-1.72-.947l-1.257.796a.578.578 0 0 0-.27.489c0 .454.501.931.886.69l.5-.31c.048-.03.177-.09.23-.11.046-.018.093.018.093.07v4.705a.769.769 0 1 0 1.538 0V9.848Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconRepeatOnceOutline)
export default Memo
