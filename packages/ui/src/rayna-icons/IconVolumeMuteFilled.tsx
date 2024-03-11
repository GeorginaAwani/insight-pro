import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconVolumeMuteFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m4.576 6.632 3.75-.536a3 3 0 0 0 1.24-.473l3.88-2.587A1 1 0 0 1 15 3.87V20.13a1 1 0 0 1-1.555.832l-3.879-2.586a3 3 0 0 0-1.24-.473l-3.75-.536A3 3 0 0 1 2 14.398V9.602a3 3 0 0 1 2.576-2.97ZM21.243 11.828l.707-.707a1 1 0 0 0-1.415-1.414l-.707.707-.707-.707a1 1 0 0 0-1.414 1.414l.707.707-.707.708a1 1 0 0 0 1.414 1.414l.707-.707.707.707a1 1 0 1 0 1.415-1.414l-.707-.708Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconVolumeMuteFilled)
export default Memo
