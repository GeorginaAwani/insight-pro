import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCloudsFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2 11.177c0 1.504.91 2.806 2.231 3.43a5.019 5.019 0 0 1 2.58-2.467 6.5 6.5 0 0 1 7.486-7.306C13.46 3.158 11.671 2 9.6 2 6.728 2 4.4 4.225 4.4 6.97c0 .231.016.459.048.681C3.01 8.231 2 9.591 2 11.177Z"
      fill="currentColor"
    />
    <path
      d="M10 20c-2.21 0-4-1.712-4-3.823 0-1.586 1.01-2.947 2.448-3.526a4.799 4.799 0 0 1-.048-.68C8.4 9.225 10.728 7 13.6 7c2.545 0 4.663 1.748 5.112 4.056 1.91.605 3.288 2.327 3.288 4.356C22 17.946 19.851 20 17.2 20H10Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCloudsFilled)
export default Memo
