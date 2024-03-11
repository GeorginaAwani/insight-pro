import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconVideoFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1l2.4 1.8A1 1 0 0 0 22 16V8a1 1 0 0 0-1.6-.8L18 9V8a3 3 0 0 0-3-3ZM4.593 9.63c.481.161.859.539 1.019 1.02.163.49.856.49 1.019 0 .16-.481.538-.859 1.019-1.02a.537.537 0 0 0 0-1.018 1.611 1.611 0 0 1-1.02-1.02.537.537 0 0 0-1.018 0c-.16.482-.538.86-1.02 1.02a.537.537 0 0 0 0 1.019Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconVideoFilled)
export default Memo
