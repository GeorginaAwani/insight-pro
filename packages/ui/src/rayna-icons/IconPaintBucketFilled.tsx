import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPaintBucketFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M3.841 8.156 13.638 2.5a1 1 0 0 1 1.366.366l5.5 9.526a3 3 0 0 1-1.098 4.098l-5.618 3.244a3 3 0 0 1-4.098-1.099l-4.234-7.334a3.001 3.001 0 0 0-1.04-1.064l-.594-.36a1 1 0 0 1 .02-1.721ZM3.025 14.423l-.77 2.308a1.311 1.311 0 1 0 2.488 0l-.77-2.308a.5.5 0 0 0-.948 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPaintBucketFilled)
export default Memo
