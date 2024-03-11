import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconInfoTriangleFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.308 16.178 9.62 4.405c1.004-1.873 3.758-1.873 4.762 0l6.31 11.773c.934 1.74-.363 3.822-2.38 3.822H5.69c-2.017 0-3.314-2.082-2.38-3.822ZM12 6a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Zm-1.25 10.75a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconInfoTriangleFilled)
export default Memo
