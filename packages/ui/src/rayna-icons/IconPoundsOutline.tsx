import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPoundsOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M16.305 2.8a6.88 6.88 0 0 0-9.3 6.2H4a1 1 0 1 0 0 2h3v1.5H4a1 1 0 1 0 0 2h3v.262a6.88 6.88 0 0 0 9.305 6.438l.474-.179a6.746 6.746 0 0 0 4.195-4.796 1 1 0 1 0-1.948-.45 4.746 4.746 0 0 1-2.952 3.375l-.474.178A4.88 4.88 0 0 1 9 14.762V14.5h6a1 1 0 1 0 0-2H9V11h6a1 1 0 1 0 0-2H9.006A4.88 4.88 0 0 1 15.6 4.672l.474.178a4.746 4.746 0 0 1 2.952 3.375 1 1 0 1 0 1.948-.45c-.507-2.2-2.082-4-4.195-4.796l-.474-.179Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPoundsOutline)
export default Memo
