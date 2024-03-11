import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIcon3DOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2c-.476 0-.947.105-1.378.308L4.297 5.285A4 4 0 0 0 2 8.904V16c0 .998.576 1.906 1.479 2.33l7.143 3.362a3.236 3.236 0 0 0 2.756 0l7.143-3.361A2.576 2.576 0 0 0 22 16V8.904a4 4 0 0 0-2.297-3.62l-6.325-2.976A3.237 3.237 0 0 0 12 2Zm8 12.382-7-3.5V4.34l5.852 2.754A2 2 0 0 1 20 8.904v5.478Zm-8-1.764 7.734 3.867a.574.574 0 0 1-.065.036l-7.142 3.361a1.237 1.237 0 0 1-1.054 0l-7.142-3.361a.573.573 0 0 1-.065-.036L12 12.618Zm-1-1.736-7 3.5V8.904a2 2 0 0 1 1.148-1.81L11 4.34v6.542Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIcon3DOutline)
export default Memo
