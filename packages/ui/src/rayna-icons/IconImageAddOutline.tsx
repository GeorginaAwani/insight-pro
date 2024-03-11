import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconImageAddOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 7a2 2 0 0 1 2-2h11a1 1 0 1 0 0-2H5a4 4 0 0 0-4 4v11a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-8a1 1 0 1 0-2 0v4.65l-3.656-4.571c-1.691-2.114-4.95-1.973-6.452.28l-1.14 1.71a3 3 0 0 0-3.944.977L3 17.296V7Zm12.782 4.328L21 17.851V18a2 2 0 0 1-2 2H8.737a1 1 0 0 1-.832-1.555l4.651-6.977a2 2 0 0 1 3.226-.14Zm-9.541 6.008A2.957 2.957 0 0 0 5.908 20H5.5a1 1 0 0 1-1-1v-.046a1 1 0 0 1 .166-.551l2.81-4.255a1 1 0 0 1 1.154-.396l-2.39 3.584Z"
      fill="currentColor"
    />
    <path
      d="M5.183 8.798c.481.16.859.538 1.019 1.02.163.489.856.489 1.019 0 .16-.482.538-.86 1.019-1.02a.537.537 0 0 0 0-1.019A1.611 1.611 0 0 1 7.22 6.76a.537.537 0 0 0-1.018 0c-.16.481-.538.859-1.019 1.02a.537.537 0 0 0 0 1.018ZM21 4a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0V7h1a1 1 0 1 0 0-2h-1V4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconImageAddOutline)
export default Memo
