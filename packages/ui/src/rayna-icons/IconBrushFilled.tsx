import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBrushFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M13.5 3v2.5a2 2 0 0 0 2 2H18a2 2 0 0 1 2 2v4H4v-4a2 2 0 0 1 2-2h2.5a2 2 0 0 0 2-2V3a1.5 1.5 0 1 1 3 0ZM3.757 15h16.486l.693 4.709A2 2 0 0 1 18.957 22h-1.836a.997.997 0 0 0-.014-.166l-.515-3.062a1 1 0 1 0-1.972.331L15.107 22H5.042a2 2 0 0 1-1.978-2.291L3.757 15Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBrushFilled)
export default Memo
