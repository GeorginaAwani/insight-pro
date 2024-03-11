import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconVideoSlashOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M22.707 1.293a1 1 0 0 1 0 1.414l-20 20a1 1 0 0 1-1.414-1.414l20-20a1 1 0 0 1 1.414 0ZM5.612 10.65a1.611 1.611 0 0 0-1.02-1.02.537.537 0 0 1 0-1.018c.482-.16.86-.538 1.02-1.02a.537.537 0 0 1 1.019 0c.16.482.538.86 1.019 1.02.49.163.49.856 0 1.019-.481.16-.859.538-1.02 1.019a.537.537 0 0 1-1.018 0Z"
      fill="currentColor"
    />
    <path
      d="M15 4c.633 0 1.231.147 1.763.409l-1.598 1.598A2.027 2.027 0 0 0 15 6H5a2 2 0 0 0-2 2v8c0 .596.26 1.131.674 1.497L2.26 18.913A3.989 3.989 0 0 1 1 16V8a4 4 0 0 1 4-4h10Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 18H8.828l-2 2H15a4.001 4.001 0 0 0 3.894-3.08l.906.68c1.319.989 3.2.048 3.2-1.6V8c0-1.248-1.079-2.09-2.175-1.997L17 9.828V16a2 2 0 0 1-2 2Zm4-3.5 2 1.5V8l-2 1.5v5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconVideoSlashOutline)
export default Memo
