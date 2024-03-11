import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconChevronLeftOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M7.917 13.37a2 2 0 0 1 0-2.74l7.355-7.815a1 1 0 0 1 1.456 1.37L9.373 12l7.355 7.815a1 1 0 0 1-1.456 1.37l-7.355-7.814Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconChevronLeftOutline)
export default Memo
