import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconVolumeLowOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 3.869c0-1.598-1.78-2.55-3.11-1.665L9.012 4.791a2 2 0 0 1-.826.315l-3.75.536A4 4 0 0 0 1 9.602v4.796a4 4 0 0 0 3.434 3.96l3.75.536c.297.042.579.15.827.316l3.88 2.586C14.22 22.682 16 21.729 16 20.13V3.87Zm-5.88 2.586L14 3.869V20.13l-3.88-2.586a4 4 0 0 0-1.652-.631l-3.75-.536A2 2 0 0 1 3 14.398V9.602a2 2 0 0 1 1.717-1.98l3.75-.536a4 4 0 0 0 1.654-.631Z"
      fill="currentColor"
    />
    <path
      d="M17.161 13.31a1 1 0 0 0 .678 1.88C19.314 14.66 20 13.278 20 12s-.686-2.66-2.161-3.19a1 1 0 0 0-.678 1.88c.525.19.839.697.839 1.31 0 .613-.314 1.12-.839 1.31Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconVolumeLowOutline)
export default Memo
