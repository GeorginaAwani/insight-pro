import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconShieldFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m16.742 4.4 1.548.686C19.313 5.54 20 6.524 20 7.644c0 1.974-.15 5.122-.994 7.206-1.077 2.66-3.972 4.8-5.685 5.881a2.46 2.46 0 0 1-2.642 0c-1.713-1.082-4.608-3.22-5.685-5.881C4.15 12.766 4 9.618 4 7.644c0-1.12.687-2.104 1.71-2.558L7.258 4.4l3.626-1.453a3 3 0 0 1 2.232 0L16.742 4.4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconShieldFilled)
export default Memo
