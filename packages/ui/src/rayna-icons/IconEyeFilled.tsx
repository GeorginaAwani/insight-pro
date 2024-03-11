import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconEyeFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M4.295 13.983a1 1 0 0 1-1.712 1.034 13.783 13.783 0 0 1-.844-1.625 1.846 1.846 0 0 1 .085-1.642c.43-.77 1.52-2.55 3.2-4.15C6.698 6.004 9.055 4.5 12 4.5s5.301 1.504 6.976 3.1c1.68 1.6 2.769 3.38 3.2 4.15.283.505.316 1.107.084 1.642-.162.374-.437.953-.844 1.625a1 1 0 1 1-1.711-1.034c.327-.54.553-1.008.69-1.319-.405-.715-1.366-2.252-2.798-3.616C16.117 7.638 14.23 6.5 12 6.5c-2.23 0-4.118 1.138-5.597 2.548-1.432 1.364-2.393 2.901-2.8 3.616.138.31.365.778.692 1.319Z"
      fill="currentColor"
    />
    <path d="M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="currentColor" />
  </svg>
)
const Memo = memo(SvgIconEyeFilled)
export default Memo
