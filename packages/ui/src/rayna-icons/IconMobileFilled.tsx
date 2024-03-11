import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMobileFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M9.52 2.5H9a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-13a3 3 0 0 0-3-3h-.52a1 1 0 0 1-.98.8h-3a1 1 0 0 1-.98-.8Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMobileFilled)
export default Memo
