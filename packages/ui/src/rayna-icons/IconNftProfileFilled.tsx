import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconNftProfileFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 14.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 21.995a3 3 0 0 0 2.445-1.538l3.889-7a3 3 0 0 0 0-2.914l-3.89-7A3 3 0 0 0 15.823 2H8.176a3 3 0 0 0-2.622 1.543l-3.89 7a3 3 0 0 0 0 2.914l3.89 7a3 3 0 0 0 2.346 1.53V22H16v-.005ZM8.175 4a1 1 0 0 0-.874.514l-3.889 7a1 1 0 0 0 0 .972l3.024 5.443C7.732 17.19 10.12 15.99 12 16c1.886.011 4.283 1.245 5.537 1.975l3.05-5.49a1 1 0 0 0 0-.97l-3.89-7A1 1 0 0 0 15.822 4H8.176Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconNftProfileFilled)
export default Memo
