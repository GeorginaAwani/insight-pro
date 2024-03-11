import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMergeOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.018 7.823A3.001 3.001 0 1 0 6 7.829v8.342a3.001 3.001 0 1 0 2 0V13.42c.302.539.632 1.074.986 1.593.882 1.294 1.933 2.517 3.092 3.427.918.72 1.957 1.285 3.067 1.483A3.001 3.001 0 0 0 21 19a3 3 0 0 0-5.788-1.11c-.6-.163-1.239-.505-1.9-1.023-.95-.747-1.868-1.799-2.673-2.98a19.367 19.367 0 0 1-1.937-3.612c-.398-.994-.623-1.843-.684-2.452ZM7 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm10 15a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM6 19a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMergeOutline)
export default Memo
