import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconUploadOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12.707 2.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L11 5.414V17a1 1 0 1 0 2 0V5.414l2.293 2.293a1 1 0 1 0 1.414-1.414l-4-4Z"
      fill="currentColor"
    />
    <path
      d="M4 17.5a1 1 0 1 0-2 0V19a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-1.5a1 1 0 1 0-2 0V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconUploadOutline)
export default Memo
