import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconLayerFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m2.292 7.53 9.537-3.468a.5.5 0 0 1 .342 0l9.537 3.468a.5.5 0 0 1 0 .94l-9.537 3.468a.5.5 0 0 1-.342 0L2.292 8.47a.5.5 0 0 1 0-.94Z"
      fill="currentColor"
    />
    <path
      d="M6.59 10.967 2.292 12.53a.5.5 0 0 0 0 .94l9.537 3.468a.5.5 0 0 0 .342 0l9.537-3.468a.5.5 0 0 0 0-.94l-4.299-1.563-5.205 1.995a.569.569 0 0 1-.409 0L6.59 10.967Z"
      fill="currentColor"
    />
    <path
      d="m2.292 16.53 2.96-1.076 6.544 2.508c.131.05.276.05.408 0l6.544-2.508 2.96 1.076a.5.5 0 0 1 0 .94l-9.537 3.468a.5.5 0 0 1-.342 0L2.292 17.47a.5.5 0 0 1 0-.94Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconLayerFilled)
export default Memo
