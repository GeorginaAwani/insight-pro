import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconTaxiOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 2a1 1 0 0 0-.894.553L8.382 4h-1.94a3 3 0 0 0-2.847 2.051L2.556 9.17a1 1 0 0 0-1.263 1.538l.1.101A1.99 1.99 0 0 0 1 12v3.5a2.5 2.5 0 0 0 1.5 2.292V19a2 2 0 0 0 2 2H7a2 2 0 0 0 2-2v-1h6v1a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2v-1.208A2.5 2.5 0 0 0 23 15.5V12c0-.447-.146-.86-.394-1.192l.101-.1a1 1 0 0 0-1.263-1.54l-1.04-3.117A3 3 0 0 0 17.558 4h-1.94l-.724-1.447A1 1 0 0 0 14 2h-4ZM5.493 6.684 4.387 10h15.226l-1.106-3.316A1 1 0 0 0 17.558 6H6.442a1 1 0 0 0-.95.684ZM3.5 16a.5.5 0 0 1-.5-.5V12h18v3.5a.5.5 0 0 1-.5.5h-17Zm1 3v-1H7v1H4.5ZM17 19v-1h2.5v1H17Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconTaxiOutline)
export default Memo
