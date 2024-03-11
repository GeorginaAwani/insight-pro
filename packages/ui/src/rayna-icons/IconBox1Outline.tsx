import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBox1Outline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 2.5a3 3 0 0 0-3 3v2a2 2 0 0 0 1 1.732V17.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9.232A2 2 0 0 0 22 7.5v-2a3 3 0 0 0-3-3H5Zm2 17a2 2 0 0 1-2-2v-8h14v8a2 2 0 0 1-2 2H7Zm12-15a1 1 0 0 1 1 1v2H4v-2a1 1 0 0 1 1-1h14Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBox1Outline)
export default Memo
