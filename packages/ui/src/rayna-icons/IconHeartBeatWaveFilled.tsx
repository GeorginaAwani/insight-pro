import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconHeartBeatWaveFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2 12h1.323a1 1 0 0 0 .928-.629l2.82-7.05c.336-.838 1.522-.838 1.857 0l6.143 15.358c.336.838 1.522.838 1.857 0l2.82-7.05a1 1 0 0 1 .929-.629H22"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Memo = memo(SvgIconHeartBeatWaveFilled)
export default Memo
