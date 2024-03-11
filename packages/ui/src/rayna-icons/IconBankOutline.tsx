import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBankOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.633 2.157a2 2 0 0 0-1.265 0l-8 2.667A2 2 0 0 0 2 6.72V9a2 2 0 0 0 2 2h1v5H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1v-5h1a2 2 0 0 0 2-2V6.72a2 2 0 0 0-1.367-1.897l-8-2.667ZM17 16v-5h-2v5h2Zm-4 0v-5h-2v5h2Zm-4 0v-5H7v5h2Zm-5 2v2h16v-2H4Zm0-9V6.72l8-2.666 8 2.667V9H4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBankOutline)
export default Memo
