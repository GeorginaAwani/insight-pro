import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconVolumeMuteOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21.243 11.828.707-.707a1 1 0 0 0-1.415-1.414l-.707.707-.707-.707a1 1 0 0 0-1.414 1.414l.707.707-.707.708a1 1 0 0 0 1.414 1.414l.707-.707.707.707a1 1 0 0 0 1.415-1.414l-.707-.708Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconVolumeMuteOutline)
export default Memo
