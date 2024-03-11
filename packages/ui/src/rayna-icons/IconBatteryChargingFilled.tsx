import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBatteryChargingFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m10.49 11.889.018-.046.065.046h-.084ZM11.492 12.158a1.281 1.281 0 0 0-.065-.047h.084l-.02.046Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 6H6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 19 10V9a3 3 0 0 0-3-3Zm-4 3.526c0-1.426-1.963-1.812-2.503-.493l-1.253 3.064a1.3 1.3 0 0 0 1.203 1.792H10v.585c0 1.426 1.963 1.812 2.503.493l1.253-3.064a1.3 1.3 0 0 0-1.203-1.792H12v-.585Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBatteryChargingFilled)
export default Memo
