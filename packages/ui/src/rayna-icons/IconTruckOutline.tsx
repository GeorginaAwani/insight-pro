import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconTruckOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 21a3.001 3.001 0 0 0 2.83-2h6.34a3.001 3.001 0 0 0 5.66 0H22a1 1 0 0 0 1-1v-3.363c0-.56-.117-1.114-.345-1.625l-.95-2.137A4 4 0 0 0 18.05 8.5H16V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v10a2 2 0 0 0 2 2h1.17A3.001 3.001 0 0 0 7 21ZM3 7a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v10H9.83a3.001 3.001 0 0 0-5.66 0H3V7Zm17.828 6.824c.113.256.172.533.172.813v1.127A3.001 3.001 0 0 0 16.17 17H16v-6.5h2.05a2 2 0 0 1 1.828 1.188l.95 2.136ZM6 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm12 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconTruckOutline)
export default Memo
