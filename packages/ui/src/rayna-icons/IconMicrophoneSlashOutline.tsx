import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMicrophoneSlashOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M21.293 1.293a1 1 0 1 1 1.414 1.414l-20 20a1 1 0 0 1-1.414-1.414l20-20ZM5.092 16.08a8.282 8.282 0 0 1-.143-.396 1 1 0 0 0-1.898.632c.15.45.326.877.524 1.28l1.517-1.516ZM6.09 20.739c4.724 3.762 12.622 2.288 14.859-4.423a1 1 0 1 0-1.898-.632c-1.734 5.204-7.79 6.411-11.53 3.623L6.09 20.739ZM12 2a6.98 6.98 0 0 1 5.035 2.137L15.62 5.55A5 5 0 0 0 7 9v4c0 .363.039.718.112 1.06L5.52 15.651A6.98 6.98 0 0 1 5 13V9a7 7 0 0 1 7-7Z"
      fill="currentColor"
    />
    <path
      d="M12 18a4.977 4.977 0 0 1-2.502-.67L8.05 18.78A7 7 0 0 0 19 13V9c.001-.37-.028-.733-.083-1.088L17 9.828V13a5 5 0 0 1-5 5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMicrophoneSlashOutline)
export default Memo
