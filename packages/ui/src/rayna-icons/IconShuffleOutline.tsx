import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconShuffleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M20.009 4.282a1 1 0 0 0-1.468 1.354h-2.916c-3.256 0-5.75 2.852-5.75 6.182 0 2.393-1.76 4.182-3.75 4.182H3a1 1 0 1 0 0 2h3.125c3.256 0 5.75-2.851 5.75-6.182 0-2.393 1.76-4.182 3.75-4.182h3.337l-.44.57a1 1 0 1 0 1.582 1.224l1.687-2.182a1 1 0 0 0-.095-1.33L20.01 4.282Z"
      fill="currentColor"
    />
    <path
      d="M3 6a1 1 0 0 0 0 2h3.125c.83 0 1.604.301 2.236.826a1 1 0 1 0 1.278-1.539A5.48 5.48 0 0 0 6.125 6H3ZM20.104 14.57a1 1 0 0 0-1.582 1.224l.44.57h-3.337a3.492 3.492 0 0 1-2.312-.89 1 1 0 1 0-1.317 1.504c.982.86 2.245 1.386 3.629 1.386h2.916a1 1 0 0 0 1.468 1.354l1.687-1.637a1 1 0 0 0 .095-1.33l-1.688-2.181Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconShuffleOutline)
export default Memo
