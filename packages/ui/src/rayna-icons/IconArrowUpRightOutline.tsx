import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconArrowUpRightOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12.707 4.636a1 1 0 1 0 0 2h3.243L4.929 17.656a1 1 0 1 0 1.414 1.415l11.021-11.02v3.242a1 1 0 1 0 2 0V5.636a1 1 0 0 0-1-1h-5.657Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconArrowUpRightOutline)
export default Memo
