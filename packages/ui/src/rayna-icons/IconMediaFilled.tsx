import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMediaFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 17.5v-11a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm8.447-8.776 4.764 2.382a1 1 0 0 1 0 1.788l-4.764 2.382A1 1 0 0 1 9 14.382V9.618a1 1 0 0 1 1.447-.894Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMediaFilled)
export default Memo
