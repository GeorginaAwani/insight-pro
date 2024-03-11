import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconGpsFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1a1 1 0 0 1 1 1v2c0 .02 0 .041-.002.062 3.62.45 6.49 3.32 6.94 6.94A.97.97 0 0 1 20 11h2a1 1 0 1 1 0 2h-2a.97.97 0 0 1-.062-.002 8.004 8.004 0 0 1-6.94 6.94A.97.97 0 0 1 13 20v2a1 1 0 1 1-2 0v-2c0-.02 0-.041.002-.062a8.004 8.004 0 0 1-6.94-6.94A.97.97 0 0 1 4 13H2a1 1 0 1 1 0-2h2c.02 0 .041 0 .062.002a8.004 8.004 0 0 1 6.94-6.94A.97.97 0 0 1 11 4V2a1 1 0 0 1 1-1Zm0 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconGpsFilled)
export default Memo
