import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconLightningOffOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M13 3.923v4.249l-1.955 1.955A1.2 1.2 0 0 1 11 9.8V7.617L8.871 12.3l-2.378 2.378a1.197 1.197 0 0 1-.275-1.376l4.49-9.876C11.242 2.252 13 2.633 13 3.923ZM15.13 11.7l2.377-2.379c.357.334.502.876.275 1.376l-4.49 9.876c-.533 1.175-2.292.794-2.292-.496v-4.249l1.955-1.955A1.2 1.2 0 0 1 13 14.2v2.183l2.13-4.684ZM20.707 4.707a1 1 0 0 0-1.414-1.414l-16 16a1 1 0 1 0 1.414 1.414l16-16Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconLightningOffOutline)
export default Memo
