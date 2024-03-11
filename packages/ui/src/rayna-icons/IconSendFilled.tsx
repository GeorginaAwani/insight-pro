import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSendFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M19.96 10.632 5.82 4.27c-1.142-.514-2.374.517-2.07 1.732l.984 3.936a1.5 1.5 0 0 0 1.359 1.133L20.5 12l-14.407.93a1.5 1.5 0 0 0-1.359 1.133l-.984 3.936c-.304 1.215.928 2.246 2.07 1.732l14.14-6.363c1.18-.53 1.18-2.205 0-2.736Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSendFilled)
export default Memo
