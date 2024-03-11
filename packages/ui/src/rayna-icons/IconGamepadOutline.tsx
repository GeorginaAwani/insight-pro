import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconGamepadOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M8 10a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2H9v1a1 1 0 1 1-2 0v-1H6a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1ZM16 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM17 15a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM18 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM15 13a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 3a1 1 0 1 0-2 0c0 .173-.06.456-.212.666-.114.159-.314.334-.788.334-.53 0-1.034.11-1.449.398-.433.3-.661.723-.753 1.137a2.184 2.184 0 0 0-.045.312 8.646 8.646 0 0 0-9.127 6.925l-.223 1.116a6.054 6.054 0 0 0 7.6 7.008l1.372-.392a5.914 5.914 0 0 1 3.25 0l1.373.392a6.054 6.054 0 0 0 7.6-7.008l-.224-1.116a8.647 8.647 0 0 0-8.285-6.948 2.726 2.726 0 0 0 1.322-.99A3.233 3.233 0 0 0 16 3Zm-4.36 4.933a.998.998 0 0 0 .72 0c.238-.01.476-.03.712-.06a6.646 6.646 0 0 1 7.341 5.292l.223 1.115a4.054 4.054 0 0 1-5.09 4.693l-1.372-.392a7.914 7.914 0 0 0-4.348 0l-1.373.392a4.054 4.054 0 0 1-5.09-4.693l.224-1.115a6.646 6.646 0 0 1 7.34-5.291c.237.03.475.05.713.059Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconGamepadOutline)
export default Memo
