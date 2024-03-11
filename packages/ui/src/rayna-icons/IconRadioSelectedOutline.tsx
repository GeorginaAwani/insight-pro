import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconRadioSelectedOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={2} />
    <circle cx={12} cy={12} r={5} stroke="currentColor" strokeWidth={2} />
  </svg>
)
const Memo = memo(SvgIconRadioSelectedOutline)
export default Memo
