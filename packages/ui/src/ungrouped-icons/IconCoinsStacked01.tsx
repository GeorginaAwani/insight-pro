import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCoinsStacked01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 17a5 5 0 1 0 10 0 5 5 0 0 0-10 0Zm0 0c0-1.126.372-2.165 1-3V5m-1 12c0 .825.2 1.604.554 2.29-.842.712-2.788 1.21-5.054 1.21-3.038 0-5.5-.895-5.5-2V5m11 0c0 1.105-2.462 2-5.5 2S2 6.105 2 5m11 0c0-1.105-2.462-2-5.5-2S2 3.895 2 5m0 9c0 1.105 2.462 2 5.5 2 2.189 0 4.08-.465 4.965-1.138M13 9.5c0 1.105-2.462 2-5.5 2S2 10.605 2 9.5"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Memo = memo(SvgIconCoinsStacked01)
export default Memo
