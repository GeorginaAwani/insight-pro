import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBellSlashFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M13 2a1 1 0 1 0-2 0v1.5c0 .028.001.055.003.082A6 6 0 0 0 6 9.5V13.5c0 .5-.41 1.368-.859 2.167a3.089 3.089 0 0 0-.269.633L16.075 5.096a5.982 5.982 0 0 0-3.078-1.514A1.02 1.02 0 0 0 13 3.5V2ZM20.707 4.707a1 1 0 0 0-1.414-1.414l-16 16a1 1 0 1 0 1.414 1.414l16-16ZM7.699 19.13 17.967 8.861c.022.21.033.422.033.637V13.5c0 .5.41 1.368.859 2.167.631 1.125.516 2.481-.69 2.94-1.213.462-3.152.893-6.169.893-1.788 0-3.197-.151-4.301-.37ZM8.92 20.325a4.987 4.987 0 0 0 .771.544A4.666 4.666 0 0 0 12 21.5c.974 0 1.77-.324 2.309-.632a4.986 4.986 0 0 0 .77-.543c-.873.108-1.893.175-3.079.175-1.186 0-2.206-.067-3.08-.175Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBellSlashFilled)
export default Memo
