import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconWalletRemoveFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M15 19a3 3 0 0 1 2.772-2.991A3 3 0 0 1 20 11h2v-.444a3 3 0 0 0-2.999-3H15.5l-.011-.006H7a1 1 0 0 1 0-2h7.264c-.38-.81-.774-1.55-1.25-1.55h-6.79A2.225 2.225 0 0 0 4 6.225V17a3 3 0 0 0 3 3h8.17c-.11-.313-.17-.65-.17-1Z"
      fill="currentColor"
    />
    <path
      d="M22 13h-2a1 1 0 1 0 0 2h2v-2ZM18 18a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconWalletRemoveFilled)
export default Memo
