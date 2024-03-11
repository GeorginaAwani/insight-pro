import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconVolumeFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m8.326 6.096-3.75.536A3 3 0 0 0 2 9.602v4.796a3 3 0 0 0 2.576 2.97l3.75.536a3 3 0 0 1 1.24.473l3.88 2.587A1 1 0 0 0 15 20.131V3.867a1 1 0 0 0-1.555-.832L9.566 5.623a3 3 0 0 1-1.24.473ZM16.56 14.589a1 1 0 0 1 .601-1.28c.525-.189.839-.696.839-1.309s-.314-1.12-.839-1.31a1 1 0 0 1 .678-1.88C19.314 9.34 20 10.722 20 12s-.686 2.66-2.161 3.19a1 1 0 0 1-1.28-.601Z"
      fill="currentColor"
    />
    <path
      d="M17.661 17.06a1 1 0 0 0 .678 1.88C21.481 17.81 23 14.852 23 12s-1.52-5.809-4.661-6.94a1 1 0 0 0-.678 1.88C19.853 7.73 21 9.813 21 12c0 2.188-1.147 4.27-3.339 5.06Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconVolumeFilled)
export default Memo
