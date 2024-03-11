import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconWaterDropOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.423 3.107c-.456-1.368-2.39-1.368-2.846 0L6.833 14.338a5 5 0 0 0 1.208 5.117l.423.424a5 5 0 0 0 7.072 0l.423-.424a5 5 0 0 0 1.208-5.117L13.423 3.107ZM8.73 14.97 12 5.162l3.27 9.809a3 3 0 0 1-.725 3.07l-.424.423a3 3 0 0 1-4.242 0l-.424-.423a3 3 0 0 1-.725-3.07Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconWaterDropOutline)
export default Memo
