import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconWalletOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.225 3A3.225 3.225 0 0 0 2 6.225V17a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-6.444a4 4 0 0 0-3.999-4H14.89a3.076 3.076 0 0 1-.138-.227c-.141-.252-.278-.548-.435-.887l-.116-.25c-.191-.41-.423-.89-.691-1.272-.223-.317-.71-.92-1.496-.92h-6.79Zm7.263 3.252.14.304H4v-.331C4 5.548 4.548 5 5.225 5h6.597c.015.019.032.042.051.07.153.217.317.543.516.968l.099.214ZM6 19a2 2 0 0 1-2-2V8.556H14.486a1 1 0 0 0 .034 0h3.481a2 2 0 0 1 1.999 2V11h-2a3 3 0 1 0 0 6h2a2 2 0 0 1-2 2H6Zm11-5a1 1 0 0 1 1-1h2v2h-2a1 1 0 0 1-1-1Zm-5.249-9.077.013.01a.059.059 0 0 1-.013-.01Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconWalletOutline)
export default Memo
