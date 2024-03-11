import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconLightningOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 3.923c0-1.29-1.758-1.671-2.293-.496l-4.489 9.876A1.2 1.2 0 0 0 7.311 15H11v5.077c0 1.29 1.758 1.671 2.292.496l4.49-9.876A1.2 1.2 0 0 0 16.689 9H13V3.923ZM8.553 13 11 7.617V9.8a1.2 1.2 0 0 0 1.2 1.2h3.247L13 16.383V14.2a1.2 1.2 0 0 0-1.2-1.2H8.553Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconLightningOutline)
export default Memo
