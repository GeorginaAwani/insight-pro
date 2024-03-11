import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconGiftOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.698 2.105 12.5 3.194l-1.198-1.09C9.427.402 6.807 1.932 6.73 4H4a3 3 0 0 0-3 3v1.889c0 .804.45 1.503 1.111 1.86v8.25a4 4 0 0 0 4 4H17.89a4 4 0 0 0 4-4v-8.25A2.11 2.11 0 0 0 23 8.889V7a3 3 0 0 0-3-3h-1.73c-.077-2.069-2.697-3.6-4.572-1.895ZM8.018 6H4a1 1 0 0 0-1 1v1.889c0 .061.05.111.111.111H20.89c.061 0 .111-.05.111-.111V7a1 1 0 0 0-1-1H8.018Zm5.482 5h-3v2.688c0 .034.008.05.015.06a.12.12 0 0 0 .048.04.12.12 0 0 0 .062.013c.011-.001.03-.005.056-.027a2.111 2.111 0 0 1 2.638 0c.027.022.045.026.056.027a.12.12 0 0 0 .062-.013.12.12 0 0 0 .048-.04.101.101 0 0 0 .015-.06V11Zm-5 0v2.688c0 1.77 2.048 2.754 3.43 1.648a.112.112 0 0 1 .14 0c1.382 1.106 3.43.122 3.43-1.649V11h4.389v8a2 2 0 0 1-2 2H6.11a2 2 0 0 1-2-2v-8H8.5Zm1.456-7.415.457.415H8.757c.084-.502.73-.842 1.2-.415ZM16.243 4c-.084-.502-.73-.842-1.2-.415L14.588 4h1.656Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconGiftOutline)
export default Memo
