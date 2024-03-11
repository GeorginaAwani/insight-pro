import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCode2Outline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M8 2a4 4 0 0 0-4 4v3.146a2 2 0 0 1-1.106 1.789l-.341.17a1 1 0 0 0 0 1.79l.341.17A2 2 0 0 1 4 14.855V18a4 4 0 0 0 4 4h1.5a1 1 0 1 0 0-2H8a2 2 0 0 1-2-2v-3.146A4 4 0 0 0 4.803 12 4 4 0 0 0 6 9.146V6a2 2 0 0 1 2-2h1.5a1 1 0 1 0 0-2H8ZM16 2a4 4 0 0 1 4 4v3.146a2 2 0 0 0 1.106 1.789l.341.17a1 1 0 0 1 0 1.79l-.341.17A2 2 0 0 0 20 14.855V18a4 4 0 0 1-4 4h-1.5a1 1 0 1 1 0-2H16a2 2 0 0 0 2-2v-3.146A4 4 0 0 1 19.197 12 4 4 0 0 1 18 9.146V6a2 2 0 0 0-2-2h-1.5a1 1 0 1 1 0-2H16Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCode2Outline)
export default Memo
