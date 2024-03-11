import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconWalletCheckFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m19.016 17.23.307-.307A3.001 3.001 0 0 1 20 11h2v-.444a3 3 0 0 0-2.999-3H15.5l-.011-.006H7a1 1 0 0 1 0-2h7.264c-.38-.81-.774-1.55-1.25-1.55h-6.79A2.225 2.225 0 0 0 4 6.225V17a3 3 0 0 0 3 3h8.358a2.998 2.998 0 0 1 3.658-2.77Z"
      fill="currentColor"
    />
    <path
      d="M22 13h-2a1 1 0 1 0 0 2h2v-2ZM22.696 19.207a1 1 0 0 0-1.414-1.414l-1.939 1.939-.282-.282a1 1 0 0 0-1.414 1.414l.989.989a1 1 0 0 0 1.414 0l2.646-2.646Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconWalletCheckFilled)
export default Memo
