import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMicrophoneSlashFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M22.707 1.293a1 1 0 0 1 0 1.414l-20 20a1 1 0 0 1-1.414-1.414l20-20a1 1 0 0 1 1.414 0ZM5.092 16.08a8.282 8.282 0 0 1-.143-.396 1 1 0 0 0-1.898.632c.15.45.326.877.524 1.28l1.517-1.516ZM6.09 20.739c4.724 3.762 12.622 2.288 14.859-4.423a1 1 0 1 0-1.898-.632c-1.734 5.204-7.79 6.411-11.53 3.623L6.09 20.739ZM12 3c1.7 0 3.236.707 4.328 1.844l-10.03 10.03A5.994 5.994 0 0 1 6 13V9a6 6 0 0 1 6-6Z"
      fill="currentColor"
    />
    <path
      d="M12 19a5.972 5.972 0 0 1-3.23-.942l9.228-9.227L18 9v4a6 6 0 0 1-6 6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMicrophoneSlashFilled)
export default Memo
