import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconLinkDetachFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12.708 4.222a5 5 0 1 1 7.07 7.071l-2.828 2.828a1 1 0 0 1-1.414-1.414l2.828-2.828a3 3 0 1 0-4.242-4.243l-2.829 2.829A1 1 0 1 1 9.88 7.05l2.829-2.828ZM8.465 9.879a1 1 0 0 1 0 1.414l-2.829 2.828a3 3 0 1 0 4.243 4.243l2.829-2.828a1 1 0 0 1 1.414 1.414l-2.829 2.828a5 5 0 1 1-7.07-7.07l2.828-2.83a1 1 0 0 1 1.414 0ZM19.364 15.536a1 1 0 0 1-1 1H16.95a.997.997 0 0 1-.703-.289c.179.18.289.429.289.703v1.414a1 1 0 0 1-2 0V16.95a1 1 0 0 1 1.703-.712 1 1 0 0 1 .711-1.703h1.414a1 1 0 0 1 1 1ZM8.465 4.636a1 1 0 0 0-1 1V7.05c0 .274.11.522.288.703a.997.997 0 0 0-.702-.288H5.637a1 1 0 0 0 0 2H7.05a1 1 0 0 0 .711-1.703 1 1 0 0 0 1.703-.711V5.635a1 1 0 0 0-1-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconLinkDetachFilled)
export default Memo
