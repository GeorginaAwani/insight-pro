import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconArFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2 6a4 4 0 0 1 4-4h2a1 1 0 0 1 0 2H6a2 2 0 0 0-2 2v2a1 1 0 0 1-2 0V6ZM22 6a4 4 0 0 0-4-4h-2a1 1 0 1 0 0 2h2a2 2 0 0 1 2 2v2a1 1 0 1 0 2 0V6ZM2 18a4 4 0 0 0 4 4h2a1 1 0 1 0 0-2H6a2 2 0 0 1-2-2v-2a1 1 0 1 0-2 0v2ZM22 18a4 4 0 0 1-4 4h-2a1 1 0 1 1 0-2h2a2 2 0 0 0 2-2v-2a1 1 0 1 1 2 0v2ZM7.957 8.762 11.444 7v4.62c-.15.042-.296.1-.438.176L7 13.947v-3.566c0-.693.373-1.324.957-1.619ZM12.556 11.62c.15.042.296.1.438.176L17 13.947v-3.566c0-.693-.373-1.324-.957-1.619L12.556 7v4.62ZM11.503 12.864 7.7 14.905l4.007 2.025a.65.65 0 0 0 .586 0l4.007-2.025-3.803-2.041a1.043 1.043 0 0 0-.994 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconArFilled)
export default Memo
