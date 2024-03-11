import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconInfoTriangleOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.5 4.877c.627-1.17 2.373-1.17 3 0l6.31 11.773c.555 1.034-.192 2.35-1.499 2.35H5.69c-1.307 0-2.054-1.316-1.5-2.35l6.312-11.773Zm3.88-.472.882-.473c-1.381-2.576-5.143-2.576-6.524 0L2.427 15.705C1.115 18.152 2.963 21 5.689 21H18.31c2.726 0 4.574-2.848 3.262-5.295L15.262 3.932l-.881.473ZM12 6a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Zm0 12a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconInfoTriangleOutline)
export default Memo
