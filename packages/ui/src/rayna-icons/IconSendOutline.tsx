import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSendOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.37 14.28c1.965-.885 1.965-3.675 0-4.56L6.23 3.358c-1.904-.857-3.957.86-3.45 2.886l.983 3.936A2.5 2.5 0 0 0 5.586 12a2.5 2.5 0 0 0-1.823 1.82l-.984 3.936c-.506 2.026 1.547 3.743 3.451 2.886l14.14-6.362ZM5.41 5.18l12.563 5.654-11.817-.762a.5.5 0 0 1-.452-.378l-.985-3.936a.5.5 0 0 1 .69-.578Zm.746 8.747 11.817-.763L5.41 18.82a.5.5 0 0 1-.69-.578l.984-3.936a.5.5 0 0 1 .452-.377Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSendOutline)
export default Memo
