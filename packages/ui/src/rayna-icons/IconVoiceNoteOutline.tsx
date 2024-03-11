import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconVoiceNoteOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M10.75 3a1 1 0 1 1 2 0v18a1 1 0 1 1-2 0V3ZM19.75 3a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1ZM4.25 8a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1ZM16.75 8a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V8ZM7.75 4a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconVoiceNoteOutline)
export default Memo
