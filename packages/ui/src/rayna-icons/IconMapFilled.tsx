import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMapFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2.625 4.875a2.25 2.25 0 0 1 2.25-2.25h14.25a2.25 2.25 0 0 1 2.25 2.25v1.09l-12.197 7.85L2.625 5.55v-.676ZM10.115 14.995l11.26-7.246v11.376a2.25 2.25 0 0 1-2.25 2.25h-3.95l-5.06-6.38ZM13.26 21.375H4.875a2.25 2.25 0 0 1-2.25-2.25V7.965l10.635 13.41Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMapFilled)
export default Memo
