import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconRocketFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.539 18C7.093 4.862 10.64 2.555 12 2.008c1.359.547 4.907 2.854 4.462 15.992C13 15 11 15 7.539 18ZM13.5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="currentColor"
    />
    <path
      d="M6.5 13c-1.149.167-2.894 2.6-2.5 7 1.182 0 1.716-.838 2.12-1.473.135-.211.255-.4.38-.527v-5ZM17.5 13c1.149.167 2.894 2.6 2.5 7-1.182 0-1.716-.838-2.12-1.473-.135-.211-.255-.4-.38-.527v-5ZM12 22.5s-1.333-2-1.5-3c0 0 .796-1 1.5-1s1.5 1 1.5 1c-.333 1.333-1.5 3-1.5 3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconRocketFilled)
export default Memo
