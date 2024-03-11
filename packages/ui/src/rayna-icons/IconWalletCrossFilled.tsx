import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconWalletCrossFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M16.293 16.293a2.987 2.987 0 0 1 1.153-.719A3 3 0 0 1 20 11h2v-.444a3 3 0 0 0-2.999-3H15.5l-.011-.006H7a1 1 0 0 1 0-2h7.264c-.38-.81-.774-1.55-1.25-1.55h-6.79A2.225 2.225 0 0 0 4 6.225V17a3 3 0 0 0 3 3h8.683c.026-.058.054-.115.085-.172a3.001 3.001 0 0 1 .525-3.535Z"
      fill="currentColor"
    />
    <path
      d="M22 13h-2a1 1 0 1 0 0 2h2v-2ZM21.243 19.828l.707-.707a1 1 0 0 0-1.415-1.414l-.707.707-.707-.707a1 1 0 0 0-1.414 1.414l.707.707-.707.707a1 1 0 0 0 1.414 1.415l.707-.707.707.707a1 1 0 1 0 1.415-1.415l-.707-.707Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconWalletCrossFilled)
export default Memo
