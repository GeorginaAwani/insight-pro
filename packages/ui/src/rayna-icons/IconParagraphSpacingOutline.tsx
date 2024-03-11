import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconParagraphSpacingOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M3 3.5h18M3 20.5h18M7 18l2-4.8m8 4.8-2-4.8m0 0-2.815-6.757a.2.2 0 0 0-.37 0L9 13.2m6 0H9"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Memo = memo(SvgIconParagraphSpacingOutline)
export default Memo
