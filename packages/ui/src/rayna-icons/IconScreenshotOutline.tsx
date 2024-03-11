import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconScreenshotOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6 2a4 4 0 0 0-4 4v2a1 1 0 0 0 2 0V6a2 2 0 0 1 2-2h2a1 1 0 0 0 0-2H6ZM18 2a4 4 0 0 1 4 4v2a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2h-2a1 1 0 1 1 0-2h2ZM2 18a4 4 0 0 0 4 4h2a1 1 0 1 0 0-2H6a2 2 0 0 1-2-2v-2a1 1 0 1 0-2 0v2ZM18 22a4 4 0 0 0 4-4v-2a1 1 0 1 0-2 0v2a2 2 0 0 1-2 2h-2a1 1 0 1 0 0 2h2ZM7.91 10.079a.967.967 0 0 1 .611.611.322.322 0 0 0 .611 0 .967.967 0 0 1 .612-.611.322.322 0 0 0 0-.611.967.967 0 0 1-.612-.612.322.322 0 0 0-.61 0 .967.967 0 0 1-.612.612.322.322 0 0 0 0 .611Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 9.6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4.8c0 .12-.005.24-.016.357.01.094.016.189.016.285a3.359 3.359 0 0 1-3.358 3.358H9a4 4 0 0 1-4-4V9.6Zm8.441 6.8H15a2 2 0 0 0 1.956-1.58.572.572 0 0 0-.21-.255l-1.874-1.248a1 1 0 0 0-1.374.258l-.876 1.252a1 1 0 0 0 .82 1.573ZM17 12.332V9.6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4.8c0 .494.179.946.476 1.295.064-.236.169-.46.31-.662l1.403-2.005a2.748 2.748 0 0 1 3.058-1.052 3.001 3.001 0 0 1 3.734-.324l1.019.68Zm-6.445 2.231c-.182.62-.149 1.26.057 1.837H9.541a.141.141 0 0 1-.116-.221l1.13-1.615Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconScreenshotOutline)
export default Memo
