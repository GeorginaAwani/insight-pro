import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBookmarkFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M4 5.301C4 3.478 5.535 2 7.429 2h9.142C18.465 2 20 3.478 20 5.301v14.494c0 2.095-2.754 3.005-4.09 1.351l-2.557-3.165c-.686-.85-2.02-.85-2.706 0L8.09 21.146C6.754 22.8 4 21.89 4 19.795V5.3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBookmarkFilled)
export default Memo
