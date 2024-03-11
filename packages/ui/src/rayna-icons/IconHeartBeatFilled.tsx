import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconHeartBeatFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.84 3.643c-1.38-.518-2.6-.977-4.274-.313-2.68 1.063-3.949 3.992-3.465 6.872.742 4.416 5.935 8.28 8.489 9.937.863.56 1.957.56 2.82 0 2.553-1.657 7.747-5.521 8.489-9.937.484-2.88-.785-5.809-3.465-6.872-1.673-.664-2.894-.205-4.274.313-.497.186-1.014.38-1.58.533-.38.102-.78.102-1.16 0-.566-.152-1.083-.347-1.58-.533Zm1.518 4.843a1 1 0 0 0-1.752.067L7.882 12H7.5a1 1 0 1 0 0 2h1a1 1 0 0 0 .894-.553l1.186-2.37 2.063 3.438a1 1 0 0 0 1.69.04L16.034 12h.465a1 1 0 1 0 0-2h-1a1 1 0 0 0-.832.445l-1.123 1.685-2.188-3.645Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconHeartBeatFilled)
export default Memo
