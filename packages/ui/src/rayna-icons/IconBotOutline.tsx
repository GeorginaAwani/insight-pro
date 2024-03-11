import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBotOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M7 12.25a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0ZM15.25 13.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM9.106 15.553a1 1 0 0 1 1.341-.447l.211.105a3 3 0 0 0 2.684 0l.21-.105a1 1 0 1 1 .895 1.788l-.21.106a5 5 0 0 1-4.473 0l-.211-.106a1 1 0 0 1-.447-1.341Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.707 1.293a1 1 0 0 0-1.414 0L14.586 2H13a1 1 0 0 0-.854.48L11.22 4H7a6 6 0 0 0-6 6v8a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-8a6 6 0 0 0-6-6h-2a1 1 0 0 0 .707-.293l1-1a1 1 0 0 0 0-1.414ZM7 6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a4 4 0 0 0-4-4H7Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBotOutline)
export default Memo
