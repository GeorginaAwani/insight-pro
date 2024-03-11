import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPlayOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.21 3.42C6.589 2.11 3.5 4.015 3.5 6.95V17.05c0 2.934 3.088 4.84 5.71 3.529l10.108-5.051c2.91-1.454 2.91-5.604 0-7.057L9.211 3.42ZM5.5 6.95c0-1.445 1.522-2.387 2.817-1.74l10.107 5.052c1.435.716 1.435 2.762 0 3.479L8.317 18.79c-1.295.648-2.817-.294-2.817-1.739V6.95Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPlayOutline)
export default Memo
