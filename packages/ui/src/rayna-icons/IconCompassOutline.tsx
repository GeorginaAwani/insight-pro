import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCompassOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.528 9.32c-.026-1.51-1.65-2.448-2.97-1.715L9.44 9.335a2 2 0 0 0-1.029 1.782l.06 3.564c.025 1.51 1.65 2.447 2.97 1.715l3.117-1.73a2 2 0 0 0 1.029-1.783l-.06-3.563Zm-5.116 1.763 3.116-1.73.06 3.564-3.116 1.73-.06-3.564Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1ZM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCompassOutline)
export default Memo
