import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIcon3DFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M11 3.235 4.723 6.19A3 3 0 0 0 3 8.904v5.978l7.211-3.605c.255-.128.519-.226.789-.296V3.235ZM13 10.981c.27.07.534.168.789.296L21 14.882V8.904a3 3 0 0 0-1.723-2.715L13 3.235v7.746ZM11.106 13.065 4.26 16.488l7.213 3.394a1.235 1.235 0 0 0 1.054 0l7.213-3.394-6.846-3.423a2 2 0 0 0-1.788 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIcon3DFilled)
export default Memo
