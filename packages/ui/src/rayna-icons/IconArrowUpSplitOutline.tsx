import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconArrowUpSplitOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M18.265 1.857a1 1 0 0 0-1.28 1.536l1.345 1.12A10.048 10.048 0 0 0 12 10.039a10.048 10.048 0 0 0-6.33-5.524l1.345-1.12a1 1 0 0 0-1.28-1.537L2.737 4.355a.997.997 0 0 0-.249 1.233l1.993 3.984a1 1 0 0 0 1.788-.894l-1.115-2.23a8.033 8.033 0 0 1 5.721 7.692v7.485a1 1 0 0 0 1.125.992 1 1 0 0 0 1.125-.992V14.14a8.033 8.033 0 0 1 5.72-7.693l-1.114 2.23a1 1 0 0 0 1.788.895l1.993-3.984a.996.996 0 0 0-.249-1.233l-2.998-2.498Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconArrowUpSplitOutline)
export default Memo
