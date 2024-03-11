import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconArrowRightOutlined = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M21.707 12.707a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L18.586 11H3a1 1 0 1 0 0 2h15.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconArrowRightOutlined)
export default Memo
