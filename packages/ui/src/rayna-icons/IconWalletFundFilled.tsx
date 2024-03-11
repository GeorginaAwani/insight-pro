import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconWalletFundFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m21.493 14.758.273.242H22v-2h-2a1 1 0 0 0-1 1.042c.87-.146 1.791.092 2.493.716Z"
      fill="currentColor"
    />
    <path
      d="M7 20h8.505a3 3 0 0 1 .502-3.909l1.18-1.048A3 3 0 0 1 20 11h1.999v-.444a3 3 0 0 0-2.999-3H15.5l-.011-.006H7a1 1 0 0 1 0-2h7.264c-.38-.81-.774-1.55-1.25-1.55h-6.79A2.225 2.225 0 0 0 4 6.225V17a3 3 0 0 0 3 3Z"
      fill="currentColor"
    />
    <path
      d="M20.164 16.253a1 1 0 0 0-1.328 0l-1.5 1.333A1 1 0 0 0 18.5 19.2V22a1 1 0 1 0 2 0v-2.8a1 1 0 0 0 1.164-1.614l-1.5-1.333Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconWalletFundFilled)
export default Memo
