import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBluetoothOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.11 4.204C11.78 3.318 10 4.271 10 5.868V9.92l-2.375-1.9a1 1 0 1 0-1.25 1.562L9.4 12l-3.024 2.42a1 1 0 0 0 1.25 1.56L10 14.08v4.051c0 1.598 1.78 2.55 3.11 1.665l3.197-2.132a2 2 0 0 0 0-3.328L12.803 12l3.504-2.336a2 2 0 0 0 0-3.328l-3.198-2.132ZM15.196 8 12 10.131V5.868L15.197 8Zm0 8L12 18.131v-4.263L15.197 16Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBluetoothOutline)
export default Memo
