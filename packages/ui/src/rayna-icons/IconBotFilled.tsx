import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBotFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.707 1.293a1 1 0 0 0-1.414 0L14.586 2H13a1 1 0 0 0-.854.48l-1 1.64a.998.998 0 0 0-.08.88H7a5 5 0 0 0-5 5v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a5 5 0 0 0-5-5h-4.048l.61-1H15a1 1 0 0 0 .707-.293l1-1a1 1 0 0 0 0-1.414ZM7 12.25a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Zm8.25 1.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm-6.144 2.053a1 1 0 0 1 1.341-.447l.211.105a3 3 0 0 0 2.684 0l.21-.105a1 1 0 1 1 .895 1.788l-.21.106a5 5 0 0 1-4.473 0l-.211-.106a1 1 0 0 1-.447-1.341Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBotFilled)
export default Memo
