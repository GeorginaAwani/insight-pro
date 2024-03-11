import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconHeartBeatWaveOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M9.857 3.95c-.67-1.676-3.043-1.676-3.714 0L3.323 11H2a1 1 0 0 0 0 2h1.323a2 2 0 0 0 1.857-1.257L8 4.693l6.143 15.357c.67 1.677 3.043 1.677 3.714 0l2.82-7.05H22a1 1 0 1 0 0-2h-1.323a2 2 0 0 0-1.857 1.257L16 19.307 9.857 3.95Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconHeartBeatWaveOutline)
export default Memo
