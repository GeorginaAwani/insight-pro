import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconHeartFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 5S9 1.5 5 3.5c-2.577 1.29-3.382 3.822-2.898 6.702.791 4.707 6.64 8.787 8.957 10.236a1.762 1.762 0 0 0 1.884 0c2.317-1.45 8.166-5.53 8.957-10.236.484-2.88-.32-5.413-2.9-6.702-4-2-7 1.5-7 1.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconHeartFilled)
export default Memo
