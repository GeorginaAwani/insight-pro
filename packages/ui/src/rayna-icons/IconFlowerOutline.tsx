import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconFlowerOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 21.333c2.133-.11 6.72-1.333 8-5.333-6.4 0-8 3.556-8 5.333ZM12 21.333C9.867 21.223 5.28 20 4 16c6.4 0 8 3.556 8 5.333Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 21.333v-8M12 4c2.299.04 4.71-.815 5.621-1.176.155-.062.32.08.28.242l-.538 2.15a.986.986 0 0 0-.03.239V8A5.333 5.333 0 0 1 12 13.333v0A5.333 5.333 0 0 1 6.667 8V5.455c0-.081-.01-.161-.03-.24L6.093 3.04a.205.205 0 0 1 .267-.242C7.294 3.126 9.87 3.963 12 4Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
)
const Memo = memo(SvgIconFlowerOutline)
export default Memo
