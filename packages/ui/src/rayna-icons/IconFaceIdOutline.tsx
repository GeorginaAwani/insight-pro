import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconFaceIdOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M20.707 3.293a1 1 0 0 1 0 1.414l-16 16a1 1 0 0 1-1.414-1.414l16-16a1 1 0 0 1 1.414 0ZM15.8 5.372A8.852 8.852 0 0 0 12 4.5c-2.944 0-5.301 1.504-6.977 3.1-1.679 1.6-2.768 3.38-3.2 4.15a1.846 1.846 0 0 0-.084 1.642c.162.374.438.953.844 1.625a1 1 0 1 0 1.712-1.034 11.896 11.896 0 0 1-.691-1.319c.406-.715 1.367-2.252 2.799-3.616C7.883 7.638 9.77 6.5 12 6.5c.802 0 1.56.147 2.27.401l1.53-1.529ZM17.69 9.138c1.38 1.341 2.309 2.827 2.706 3.526-.138.31-.364.778-.691 1.319a1 1 0 0 0 1.712 1.034c.406-.672.681-1.25.843-1.625a1.846 1.846 0 0 0-.084-1.642c-.42-.75-1.465-2.46-3.071-4.026L17.69 9.138Z"
      fill="currentColor"
    />
    <path
      d="m12 9 .168.003-4.165 4.165A4 4 0 0 1 12 9ZM12 17a3.984 3.984 0 0 1-1.763-.409l5.354-5.354A4 4 0 0 1 12 17Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconFaceIdOutline)
export default Memo
