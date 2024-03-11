import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconWalletWithdrawFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M16.5 17c0-.379.07-.742.198-1.075A3 3 0 0 1 19 11h2v-.444a3 3 0 0 0-2.999-3H14.5l-.011-.006H6a1 1 0 0 1 0-2h7.264c-.38-.81-.774-1.55-1.25-1.55h-6.79A2.225 2.225 0 0 0 3 6.225V17a3 3 0 0 0 3 3h9.074c.109-.477.336-.935.684-1.326.22-.247.47-.45.742-.606V17Z"
      fill="currentColor"
    />
    <path
      d="M19.5 14c.546 0 1.059.146 1.5.401V13h-2a1 1 0 0 0-.932 1.363A2.987 2.987 0 0 1 19.5 14ZM21.664 21.414l-1.5 1.333a1 1 0 0 1-1.328 0l-1.5-1.333A1 1 0 0 1 18.5 19.8V17a1 1 0 1 1 2 0v2.8a1 1 0 0 1 1.164 1.614Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconWalletWithdrawFilled)
export default Memo
