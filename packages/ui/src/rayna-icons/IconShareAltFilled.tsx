import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconShareAltFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M4.46 18.877c-.126.164-.388.06-.356-.145C4.81 14.307 7.713 6.868 14.743 6.07 15.433 5.992 16 5.437 16 4.743c0-.857.837-1.445 1.595-1.044C19.181 4.537 21.135 5.983 22 8c.958 2.235-1.842 4.618-4.283 6.082-.779.467-1.717-.123-1.717-1.03 0-.607-.44-1.138-1.047-1.13-4.154.051-8.41 4.246-10.493 6.955Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconShareAltFilled)
export default Memo
