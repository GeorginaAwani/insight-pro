import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconWalletAddFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M17.128 17.128c.064-.21.15-.411.257-.6A3 3 0 0 1 19 11h2v-.443a3 3 0 0 0-2.999-3H14.5l-.011-.006H6a1 1 0 0 1 0-2h7.264c-.38-.81-.774-1.55-1.25-1.55h-6.79A2.225 2.225 0 0 0 3 6.225V17a3 3 0 0 0 3 3h9c0-1.354.897-2.498 2.128-2.872Z"
      fill="currentColor"
    />
    <path
      d="M21 15h-2a1 1 0 1 1 0-2h2v2ZM21 18a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconWalletAddFilled)
export default Memo
