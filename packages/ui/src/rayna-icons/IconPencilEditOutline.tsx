import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPencilEditOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.596 2.91a3.448 3.448 0 0 0-4.876 0l-8.526 8.525a4 4 0 0 0-1.131 2.263l-.247 1.73a2 2 0 0 0 2.262 2.262l1.73-.247a4 4 0 0 0 2.263-1.131l8.525-8.526a3.448 3.448 0 0 0 0-4.876Zm-3.253 1.24a1.449 1.449 0 0 1 2.012 2.013L17.343 4.15Zm-1.432 1.397 2.048 2.048-7.303 7.303a2 2 0 0 1-1.131.565l-1.73.247.248-1.729a2 2 0 0 1 .565-1.131l7.303-7.303Z"
      fill="currentColor"
    />
    <path
      d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-6a1 1 0 1 0-2 0v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2.684a1 1 0 1 0 0-2H6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPencilEditOutline)
export default Memo
