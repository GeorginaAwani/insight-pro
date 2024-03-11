import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconEmojiFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-1.293-5.707a1 1 0 0 0-1.414 1.414 3.828 3.828 0 0 0 5.414 0 1 1 0 0 0-1.414-1.414 1.829 1.829 0 0 1-2.586 0ZM10.2 9.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.3 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconEmojiFilled)
export default Memo
