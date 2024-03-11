import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBookmarkAddOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M7.429 1C5.019 1 3 2.89 3 5.301v14.494c0 3.12 3.991 4.302 5.868 1.98l2.557-3.166a.756.756 0 0 1 1.15 0l2.557 3.165C17.01 24.097 21 22.916 21 19.794V10.5a1 1 0 1 0-2 0v9.295c0 1.07-1.516 1.708-2.312.723l-2.557-3.166c-1.087-1.345-3.175-1.345-4.262 0l-2.557 3.166c-.796.985-2.312.347-2.312-.723V5.3C5 4.066 6.051 3 7.429 3H14.5a1 1 0 1 0 0-2H7.429Z"
      fill="currentColor"
    />
    <path
      d="M19 2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0V6h2a1 1 0 1 0 0-2h-2V2Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBookmarkAddOutline)
export default Memo
