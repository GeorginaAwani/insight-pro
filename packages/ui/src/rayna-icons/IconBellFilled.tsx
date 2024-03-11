import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBellFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M13 3a1 1 0 0 0-2 0v1.5c0 .028.001.055.003.082A6 6 0 0 0 6 10.5V14.5c0 .5-.41 1.368-.859 2.167-.631 1.125-.516 2.481.69 2.94 1.212.462 3.152.893 6.169.893 3.017 0 4.956-.43 6.17-.892 1.205-.46 1.32-1.816.689-2.94C18.41 15.867 18 15 18 14.5v-4a6.001 6.001 0 0 0-5.003-5.918A1.02 1.02 0 0 0 13 4.5V3ZM8.92 21.325a4.987 4.987 0 0 0 .771.544A4.666 4.666 0 0 0 12 22.5c.974 0 1.77-.324 2.309-.632a4.986 4.986 0 0 0 .77-.543c-.873.108-1.893.175-3.079.175-1.186 0-2.206-.067-3.08-.175Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBellFilled)
export default Memo
