import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPcUserOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.25 3.4a4 4 0 0 0-4 4v6.8a4 4 0 0 0 4 4h4v.4H7.5a1 1 0 1 0 0 2H13a1 1 0 0 0 0-2h-1.75v-.4h2.902c-.09.19-.15.404-.152.64-.004.368.13.679.305.914.315.423.804.663 1.176.805.791.303 1.812.441 2.519.441.707 0 1.728-.137 2.52-.44.37-.143.86-.383 1.175-.806.175-.235.31-.546.305-.914a1.618 1.618 0 0 0-.315-.918 4.732 4.732 0 0 0-2.9-1.849 3.882 3.882 0 0 0 .1-.206 3.001 3.001 0 0 0 .365-5.595V7.4a4 4 0 0 0-4-4h-10ZM15 13a3 3 0 0 0 1.615 2.662 1.993 1.993 0 0 1-1.365.538h-10a2 2 0 0 1-2-2V7.4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2.694A3.001 3.001 0 0 0 15 13Zm3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-1.733 6.718c.511.18 1.234.282 1.733.282.499 0 1.222-.102 1.733-.282C19.305 18.322 18.675 18 18 18s-1.305.322-1.733.718Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPcUserOutline)
export default Memo
