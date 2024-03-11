import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBugOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="m7.2 5.08.102-.412a4.842 4.842 0 0 1 9.396 0l.103.412a4.006 4.006 0 0 1 2.708 1.997l.784-.784a1 1 0 1 1 1.414 1.414L20 9.414V12h1.5a1 1 0 1 1 0 2h-1.562a7.946 7.946 0 0 1-.836 2.687l1.605 1.606a1 1 0 0 1-1.414 1.414l-1.35-1.35A7.98 7.98 0 0 1 12 21a7.98 7.98 0 0 1-5.942-2.644l-1.35 1.351a1 1 0 0 1-1.415-1.414l1.606-1.606A7.945 7.945 0 0 1 4.062 14H2.5a1 1 0 1 1 0-2H4V9.414L2.293 7.707a1 1 0 0 1 1.414-1.414l.785.784A4.006 4.006 0 0 1 7.199 5.08ZM12 19a6 6 0 0 1-6-6V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a6 6 0 0 1-6 6Zm2.715-14a2.842 2.842 0 0 0-5.43 0h5.43Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBugOutline)
export default Memo
