import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconGemOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 2a1 1 0 0 0-.196.02l-3.938.787A3 3 0 0 0 2.67 4.635L1.072 8.629A1 1 0 0 0 1.2 9.6l8.4 11.2a3 3 0 0 0 4.8 0l8.4-11.2a1 1 0 0 0 .128-.971l-1.597-3.994a3 3 0 0 0-2.197-1.828l-3.938-.788A.999.999 0 0 0 15 2H9Zm10.63 8.494-4.457 5.942 2.525-5.556 1.932-.386Zm.995-2.239-2.917.584-1.296-4.537 2.33.466a1 1 0 0 1 .732.61l1.151 2.877ZM8.325 9l1.43-5h4.49l1.43 5h-7.35ZM12 18.583 8.553 11h6.894L12 18.583Zm-3.173-2.147L6.302 10.88l-1.932-.386 4.457 5.942Zm-4.3-11.059L3.374 8.255l2.917.584 1.296-4.537-2.33.466a1 1 0 0 0-.732.61Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconGemOutline)
export default Memo
