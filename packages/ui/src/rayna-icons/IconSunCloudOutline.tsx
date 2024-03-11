import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSunCloudOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 1a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.027 11.378a7 7 0 1 1 7.825 7.57C12.386 20.682 10.873 22 9 22H4.5C2.514 22 1 20.312 1 18.353c0-1.224.582-2.328 1.5-2.994.032-1.747 1.043-3.294 2.527-3.981Zm2.07-.364A5.002 5.002 0 0 1 17 12a5.001 5.001 0 0 1-4.095 4.918c-.26-1.225-1.037-2.263-2.105-2.825-.506-1.658-1.931-2.93-3.703-3.079ZM4.5 15.441C4.5 14.038 5.56 13 6.75 13c1.057 0 2.005.812 2.21 1.98a1 1 0 0 0 .654.771c.777.273 1.386 1.075 1.386 2.072C11 19.08 10.052 20 9 20H4.5c-.775 0-1.5-.683-1.5-1.647 0-.714.41-1.292.938-1.527a1 1 0 0 0 .584-1.042 2.673 2.673 0 0 1-.022-.343Z"
      fill="currentColor"
    />
    <path
      d="M19.86 15.134a1 1 0 1 0-1 1.732l1.299.75a1 1 0 1 0 1-1.732l-1.3-.75ZM18.494 8.5a1 1 0 0 1 .366-1.366l1.299-.75a1 1 0 1 1 1 1.732l-1.3.75a1 1 0 0 1-1.365-.366ZM3.84 6.134a1 1 0 0 0-1 1.732l1.299.75a1 1 0 0 0 1-1.732l-1.3-.75Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSunCloudOutline)
export default Memo
