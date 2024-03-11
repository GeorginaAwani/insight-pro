import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconDevicesOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 5.9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V7c0 .056-.005.112-.014.166A3.001 3.001 0 0 1 21 10v8a3 3 0 0 1-3 3h-4a3.001 3.001 0 0 1-2.8-1.92c-.064.013-.131.02-.2.02H6.8a1 1 0 1 1 0-2H9v-.4H5a4 4 0 0 1-4-4V5.9Zm10 8.8V10a3 3 0 0 1 3-3h3V5.9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6.8a2 2 0 0 0 2 2h6Zm2-4.7a1 1 0 0 1 1-1h.27a.997.997 0 0 0 .73.316h2A.997.997 0 0 0 17.73 9H18a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-8Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconDevicesOutline)
export default Memo
