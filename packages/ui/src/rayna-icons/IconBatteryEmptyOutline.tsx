import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBatteryEmptyOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10.457a4 4 0 0 0 4-4v-.015A1.772 1.772 0 0 0 22 13.23V10.77c0-.9-.672-1.644-1.543-1.756V9a4 4 0 0 0-4-4H6ZM4 9a2 2 0 0 1 2-2h10.457a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBatteryEmptyOutline)
export default Memo
