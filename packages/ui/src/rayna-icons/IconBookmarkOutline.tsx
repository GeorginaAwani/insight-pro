import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBookmarkOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.429 1C5.019 1 3 2.89 3 5.301v14.494c0 3.12 3.991 4.302 5.868 1.98l2.557-3.166a.756.756 0 0 1 1.15 0l2.557 3.165C17.01 24.097 21 22.916 21 19.794V5.302C21 2.891 18.981 1 16.571 1H7.43ZM5 5.301C5 4.066 6.051 3 7.429 3h9.142C17.95 3 19 4.066 19 5.301v14.494c0 1.07-1.516 1.708-2.312.723l-2.557-3.166c-1.087-1.345-3.175-1.345-4.262 0l-2.557 3.166c-.796.985-2.312.347-2.312-.723V5.3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBookmarkOutline)
export default Memo
