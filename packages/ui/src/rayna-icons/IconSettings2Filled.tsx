import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSettings2Filled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6 6c0 .057.005.112.014.166a3.001 3.001 0 0 0 0 5.668c-.01.054-.014.11-.014.166v9a1 1 0 1 0 2 0v-9c0-.056-.005-.112-.014-.166a3.001 3.001 0 0 0 0-5.668C7.996 6.112 8 6.056 8 6V3a1 1 0 0 0-2 0v3ZM16.014 17.834c-.01.054-.014.11-.014.166v3a1 1 0 1 0 2 0v-3c0-.056-.005-.112-.014-.166a3.001 3.001 0 0 0 0-5.668c.01-.054.014-.11.014-.166V3a1 1 0 1 0-2 0v9c0 .056.005.112.014.166a3.001 3.001 0 0 0 0 5.668Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSettings2Filled)
export default Memo
