import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMoonOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11c4.608 0 8.553-2.834 10.19-6.85a1.34 1.34 0 0 0-.017-1.067 1.424 1.424 0 0 0-.62-.658c-.455-.246-1.143-.295-1.684.161A6 6 0 0 1 10 10c0-2.805 2.025-5.21 4.66-5.84.69-.164 1.057-.748 1.131-1.255.04-.267.012-.588-.152-.89a1.338 1.338 0 0 0-.845-.657A11.015 11.015 0 0 0 12 1ZM3 12a9 9 0 0 1 9.175-8.998C9.715 4.368 8 6.993 8 10a8 8 0 0 0 11.274 7.301A9 9 0 0 1 3 12Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMoonOutline)
export default Memo
