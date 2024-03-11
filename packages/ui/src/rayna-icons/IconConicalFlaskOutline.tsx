import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconConicalFlaskOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.559 1a1 1 0 0 0-.949 1.316l.692 2.077a5 5 0 0 1 .257 1.58V9.09c0 .544-.139 1.08-.403 1.555l-4.383 7.9C1.664 20.545 3.11 23 5.397 23h13.206c2.287 0 3.733-2.456 2.624-4.455l-4.14-7.463a5 5 0 0 1-.628-2.482l.03-2.704a5 5 0 0 1 .23-1.44l.676-2.157A1 1 0 0 0 16.441 1H7.56Zm1.64 2.76L8.947 3h6.133l-.269.857a6.996 6.996 0 0 0-.32 2.016l-.03 2.704a7 7 0 0 0 .878 3.475l4.14 7.463A1 1 0 0 1 18.603 21H5.397a1 1 0 0 1-.875-1.485l4.383-7.9c.265-.479.453-.994.557-1.526H11a1 1 0 0 0 0-2H9.559V7H11a1 1 0 0 0 0-2H9.49a7 7 0 0 0-.29-1.24Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconConicalFlaskOutline)
export default Memo
