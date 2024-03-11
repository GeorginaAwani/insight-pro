import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconVolumeLowFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m4.576 6.632 3.75-.536a3 3 0 0 0 1.24-.473l3.88-2.587A1 1 0 0 1 15 3.87V20.13a1 1 0 0 1-1.555.832l-3.879-2.586a3 3 0 0 0-1.24-.473l-3.75-.536A3 3 0 0 1 2 14.398V9.602a3 3 0 0 1 2.576-2.97ZM17.161 13.31a1 1 0 0 0 .678 1.88C19.314 14.66 20 13.278 20 12s-.686-2.66-2.161-3.19a1 1 0 0 0-.678 1.88c.525.19.839.697.839 1.31 0 .613-.314 1.12-.839 1.31Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconVolumeLowFilled)
export default Memo
