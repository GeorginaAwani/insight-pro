import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCursorFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M5.022 4.29 8.18 20.12c.193.966 1.523 1.206 2.07.372l2.686-4.104c.2-.304.543-.493.917-.507l5.054-.177c1.027-.036 1.476-1.259.698-1.902L6.872 3.267c-.811-.67-2.052.015-1.85 1.024Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCursorFilled)
export default Memo
