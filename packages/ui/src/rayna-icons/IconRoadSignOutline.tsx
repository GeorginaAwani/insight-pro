import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconRoadSignOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M13.752 7.708a1 1 0 0 0-1.486 1.302A4.468 4.468 0 0 0 10 12.9v2.875a1 1 0 0 0 2 0v-2.875c0-.594.21-1.141.562-1.569a1 1 0 0 0 1.828.09l.76-1.52a.997.997 0 0 0-.249-1.233l-1.149-.959Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.414 9.172a4 4 0 0 0 0 5.656l6.757 6.758a4 4 0 0 0 5.657 0l6.757-6.757a4 4 0 0 0 0-5.657l-6.757-6.758a4 4 0 0 0-5.657 0L2.414 9.172Zm1.414 4.242a2 2 0 0 1 0-2.828l6.757-6.758a2 2 0 0 1 2.829 0l6.757 6.758a2 2 0 0 1 0 2.828l-6.757 6.758a2 2 0 0 1-2.829 0l-6.757-6.758Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconRoadSignOutline)
export default Memo
