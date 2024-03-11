import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBicycleOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.5 4a1 1 0 0 1 1-1H5a1 1 0 0 1 1 1v1.667L7 7h6.634a1 1 0 0 1 .866-1.5H18a1 1 0 1 1 0 2h-.965l-.452.679.887 3.328a5.25 5.25 0 1 1-4.486 3.038l-2.8-1.272a5.25 5.25 0 1 1-4.683-1.72v-3.22L4.199 6.6A1 1 0 0 1 4 6V5h-.5a1 1 0 0 1-1-1Zm13.03 7.991a5.257 5.257 0 0 0-1.344.904L7.5 9.856V9h7.232l.797 2.991Zm-.725 3.383a3.25 3.25 0 1 0 3.2-1.864l.461 1.732a1 1 0 0 1-1.38 1.168l-2.28-1.037ZM5.5 15.5v-1.913a3.251 3.251 0 1 0 2 .162V15.5a1 1 0 1 1-2 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBicycleOutline)
export default Memo
