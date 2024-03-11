import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconHeadphonesFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 3C6.477 3 2 7.477 2 13v5a1 1 0 0 0 1.11.994 1.589 1.589 0 0 0 3.066-.582V16.25c0-1.295-1.239-1.836-2.176-1.503V13a8 8 0 1 1 16 0v1.738c-.936-.334-2.177.205-2.177 1.5v2.174a1.588 1.588 0 0 0 3.067.582A1.002 1.002 0 0 0 22 18v-5c0-5.523-4.477-10-10-10Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconHeadphonesFilled)
export default Memo
