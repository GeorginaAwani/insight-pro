import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconVideoSlashFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M22.707 2.707a1 1 0 0 0-1.414-1.414l-20 20a1 1 0 1 0 1.414 1.414l20-20Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 5.17c-.312-.11-.65-.17-1-.17H5a3 3 0 0 0-3 3v8c0 .872.372 1.657.966 2.205L16.001 5.171ZM5.613 10.65a1.611 1.611 0 0 0-1.02-1.02.537.537 0 0 1 0-1.018c.482-.16.86-.538 1.02-1.02a.537.537 0 0 1 1.019 0c.16.482.538.86 1.019 1.02.49.163.49.856 0 1.019-.481.16-.859.538-1.02 1.019a.537.537 0 0 1-1.018 0Z"
      fill="currentColor"
    />
    <path
      d="M7.828 19H15a3 3 0 0 0 3-3v-1l2.4 1.8A1 1 0 0 0 22 16V8a1 1 0 0 0-1.6-.8L18 9v-.172L7.828 19Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconVideoSlashFilled)
export default Memo
