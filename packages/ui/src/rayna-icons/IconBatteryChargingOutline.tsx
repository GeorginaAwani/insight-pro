import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBatteryChargingOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 9.526c0-1.426-1.963-1.812-2.503-.493l-1.253 3.064a1.3 1.3 0 0 0 1.203 1.792H10v.585c0 1.426 1.963 1.812 2.503.493l1.253-3.064a1.3 1.3 0 0 0-1.203-1.792H12v-.585Zm-1.51 2.363.018-.046.065.046h-.084Zm1.002.269a1.281 1.281 0 0 0-.065-.047h.084l-.02.046Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-.208a2.5 2.5 0 0 0 1.5-2.292v-1A2.5 2.5 0 0 0 20 9.208V9a4 4 0 0 0-4-4H6Zm12 4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBatteryChargingOutline)
export default Memo
