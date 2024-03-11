import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconVideoOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M4.593 9.63c.481.161.859.539 1.019 1.02.163.49.856.49 1.019 0 .16-.481.538-.859 1.019-1.02a.537.537 0 0 0 0-1.018 1.611 1.611 0 0 1-1.02-1.02.537.537 0 0 0-1.018 0c-.16.482-.538.86-1.02 1.02a.537.537 0 0 0 0 1.019Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4.001 4.001 0 0 0 3.894-3.08l.906.68c1.319.989 3.2.048 3.2-1.6V8c0-1.648-1.881-2.589-3.2-1.6l-.906.68A4.001 4.001 0 0 0 15 4H5Zm16 12-2-1.5v-5L21 8v8ZM3 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconVideoOutline)
export default Memo
