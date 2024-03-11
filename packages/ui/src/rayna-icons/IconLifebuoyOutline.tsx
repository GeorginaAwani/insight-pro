import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconLifebuoyOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.523 7.109 6.382 4.968a9.004 9.004 0 0 1 11.236 0l-2.141 2.14a6.005 6.005 0 0 0-6.954 0Zm8.368 1.414 2.141-2.141a9.004 9.004 0 0 1 0 11.236l-2.14-2.141a6.005 6.005 0 0 0 0-6.954Zm-1.414 8.368 2.141 2.141a9.004 9.004 0 0 1-11.236 0l2.141-2.14a6.005 6.005 0 0 0 6.954 0Zm-8.368-1.414-2.141 2.141a9.004 9.004 0 0 1 0-11.236l2.14 2.141a6.005 6.005 0 0 0 0 6.954Zm12.67-11.255c-4.297-4.296-11.261-4.296-15.557 0-4.296 4.296-4.296 11.26 0 15.556 4.296 4.296 11.26 4.296 15.556 0 4.296-4.296 4.296-11.26 0-15.556ZM9.171 9.172a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconLifebuoyOutline)
export default Memo
