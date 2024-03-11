import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconRouteFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.294 12.719 3.193 9.286a4.465 4.465 0 1 1 7.615 0l-2.102 3.433a1.975 1.975 0 0 1-1.212.895.996.996 0 0 1-.354.654 1.972 1.972 0 0 0-.666 1.35c-.03.53.168 1.281 1.166 2.114 1.011.842 2.691 1.459 4.545 1.88a30.51 30.51 0 0 0 3.22.538l-1.747-2.854a4.465 4.465 0 1 1 7.615 0l-2.102 3.433c-.294.48-.741.78-1.225.898a1 1 0 0 1-1.012.67c-1.282-.085-3.237-.29-5.193-.734-1.921-.437-3.991-1.137-5.38-2.295-1.402-1.167-1.955-2.499-1.884-3.761a3.983 3.983 0 0 1 1.06-2.468 2.045 2.045 0 0 1-.243-.32ZM7 8.705a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm10.47 8.005a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconRouteFilled)
export default Memo
