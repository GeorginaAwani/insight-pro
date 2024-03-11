import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMapAltFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M1.768 2.6a.25.25 0 0 1 .357-.225l4.447 2.118a.5.5 0 0 1 .285.451v13.967a.5.5 0 0 1-.715.451L2.48 17.618a1.25 1.25 0 0 1-.712-1.128V2.6ZM8.916 19.98a.5.5 0 0 1-.559-.497V5.246a.5.5 0 0 1 .433-.495l2.751-.374L15.091 4a.5.5 0 0 1 .552.497v14.237a.5.5 0 0 1-.44.496l-6.287.748ZM17.428 19.507a.5.5 0 0 1-.285-.452V5.09a.5.5 0 0 1 .715-.452l3.662 1.744c.436.207.713.647.713 1.129v13.889a.25.25 0 0 1-.358.226l-4.447-2.118Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMapAltFilled)
export default Memo
