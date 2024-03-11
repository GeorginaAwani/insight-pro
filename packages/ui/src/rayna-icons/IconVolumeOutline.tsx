import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconVolumeOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.89 2.204C14.22 1.318 16 2.271 16 3.87V20.13c0 1.598-1.78 2.55-3.11 1.665l-3.879-2.587a2.002 2.002 0 0 0-.826-.315l-3.75-.536A4 4 0 0 1 1 14.398V9.602a4 4 0 0 1 3.434-3.96l3.75-.536a2 2 0 0 0 .827-.315l3.88-2.587ZM14 3.87l-3.88 2.586a4 4 0 0 1-1.652.631l-3.75.536A2 2 0 0 0 3 9.602v4.796a2 2 0 0 0 1.717 1.98l3.75.536a4 4 0 0 1 1.654.631L14 20.131V3.87Z"
      fill="currentColor"
    />
    <path
      d="M16.56 14.59a1 1 0 0 1 .601-1.28c.525-.19.839-.697.839-1.31 0-.613-.314-1.12-.839-1.31a1 1 0 0 1 .678-1.88C19.314 9.34 20 10.722 20 12s-.686 2.66-2.161 3.19a1 1 0 0 1-1.28-.6Z"
      fill="currentColor"
    />
    <path
      d="M17.661 17.06a1 1 0 0 0 .678 1.88C21.481 17.81 23 14.852 23 12s-1.52-5.809-4.661-6.94a1 1 0 0 0-.678 1.88C19.853 7.73 21 9.813 21 12c0 2.188-1.147 4.27-3.339 5.06Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconVolumeOutline)
export default Memo
