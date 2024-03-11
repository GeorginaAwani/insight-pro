import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPieChartOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.138 1.08C14.893.903 14 1.94 14 3v5a2 2 0 0 0 2 2h5c1.06 0 2.097-.893 1.92-2.138a8.004 8.004 0 0 0-6.782-6.782ZM16 3c0 .003-.004.01-.015.021a.17.17 0 0 1-.129.039l.144.023V8h4.917l.023.144a.168.168 0 0 1 .039-.129A.05.05 0 0 1 21 8h-.083A6.006 6.006 0 0 0 16 3.083V3Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 4c0-1.071-.893-2.073-2.108-1.94C5.89 2.614 2 6.852 2 12c0 5.523 4.477 10 10 10 5.149 0 9.387-3.89 9.94-8.892C22.072 11.893 21.07 11 20 11h-5a2 2 0 0 1-2-2V4Zm-9 8a8.002 8.002 0 0 1 7-7.938V9a4 4 0 0 0 4 4h4.938A8.002 8.002 0 0 1 4 12Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPieChartOutline)
export default Memo
