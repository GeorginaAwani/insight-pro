import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconInfoHexagonOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 6a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1ZM12 18a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.006 1.008a4 4 0 0 0-4.014 0L6.744 2.893l-3.26 1.873a4 4 0 0 0-2.007 3.476l.007 3.756v.004l-.007 3.756a4 4 0 0 0 2.007 3.476l3.256 1.871.004.002 3.248 1.885a4 4 0 0 0 4.014 0l3.249-1.885.004-.002 3.256-1.87a4 4 0 0 0 2.007-3.477l-.008-3.756v-.004l.008-3.756a4 4 0 0 0-2.007-3.476l-3.256-1.871-.004-.002-3.249-1.885Zm-3.01 1.73a2 2 0 0 1 2.007 0l3.252 1.887.004.002 3.26 1.873a2 2 0 0 1 1.003 1.738l-.008 3.76v.004l.008 3.76a2 2 0 0 1-1.004 1.738l-3.26 1.873-.003.002-3.252 1.887a2 2 0 0 1-2.007 0l-3.252-1.887L4.48 17.5a2 2 0 0 1-1.003-1.738l.007-3.76v-.004l-.007-3.76A2 2 0 0 1 4.48 6.5l3.26-1.873.004-.002 3.252-1.887Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconInfoHexagonOutline)
export default Memo
