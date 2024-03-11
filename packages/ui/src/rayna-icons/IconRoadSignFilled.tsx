import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconRoadSignFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.12 9.879 9.879 3.12a3 3 0 0 1 4.243 0l6.757 6.758a3 3 0 0 1 0 4.242l-6.757 6.758a3 3 0 0 1-4.243 0L3.121 14.12a3 3 0 0 1 0-4.242Zm10.632-2.17a1 1 0 0 0-1.486 1.301A4.468 4.468 0 0 0 10 12.9v2.875a1 1 0 0 0 2 0v-2.875c0-.594.21-1.141.562-1.569a1 1 0 0 0 1.828.09l.76-1.52a.997.997 0 0 0-.249-1.233l-1.149-.959Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconRoadSignFilled)
export default Memo
