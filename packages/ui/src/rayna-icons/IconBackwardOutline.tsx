import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBackwardOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.155 6.783C10.92 5.9 13 7.183 13 9.159v.2l5.154-2.576C19.921 5.9 22 7.183 22 9.159v5.682c0 1.976-2.08 3.26-3.846 2.377L13 14.642v.2c0 1.975-2.08 3.258-3.845 2.376l-5.686-2.842c-1.959-.979-1.959-3.773 0-4.752l5.686-2.841ZM11 9.159a.657.657 0 0 0-.951-.587l-5.686 2.84a.656.656 0 0 0 0 1.175l5.686 2.841c.437.22.951-.1.951-.587V9.16ZM13 12c0 .233.122.465.363.586l5.686 2.841c.437.22.951-.1.951-.587V9.16a.657.657 0 0 0-.951-.587l-5.686 2.84A.649.649 0 0 0 13 12V12Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBackwardOutline)
export default Memo
