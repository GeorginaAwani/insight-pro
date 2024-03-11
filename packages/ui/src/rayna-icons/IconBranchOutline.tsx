import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBranchOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.5 7.33a3.001 3.001 0 1 0-2 0v5.34a3.001 3.001 0 0 0 .002 5.66 1.016 1.016 0 0 0-.002.067V21.5a1 1 0 1 0 2 0v-3.103c0-.023 0-.045-.002-.067a3.01 3.01 0 0 0 1.729-1.577c3.672.012 6.107-.817 7.56-2.668 1.348-1.719 1.66-4.109 1.706-6.753A3.001 3.001 0 0 0 17.5 1.5a3 3 0 0 0-1.008 5.827c-.05 2.576-.362 4.356-1.279 5.523-.875 1.115-2.5 1.889-5.807 1.903A3.006 3.006 0 0 0 7.5 12.671V7.329Zm0-2.83a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm10 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-10 10a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBranchOutline)
export default Memo
