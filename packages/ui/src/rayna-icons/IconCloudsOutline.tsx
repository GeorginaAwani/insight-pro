import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCloudsOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M9.6 3C7.237 3 5.4 4.82 5.4 6.97c0 .184.013.364.038.54a1 1 0 0 1-.616 1.069C3.729 9.019 3 10.034 3 11.177c0 1.116.704 2.118 1.752 2.57a4.98 4.98 0 0 0-.857 1.804C2.199 14.791 1 13.138 1 11.177c0-1.763.975-3.282 2.4-4.122v-.084C3.4 3.63 6.219 1 9.6 1c2.74 0 5.103 1.722 5.907 4.153a6.487 6.487 0 0 0-2.424-.4C12.334 3.703 11.066 3 9.6 3Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.6 6c-3.381 0-6.2 2.631-6.2 5.97v.085c-1.425.84-2.4 2.359-2.4 4.122C5 18.883 7.282 21 10 21h7.2c3.16 0 5.8-2.46 5.8-5.588 0-2.3-1.434-4.246-3.445-5.108C18.8 7.794 16.397 6 13.6 6Zm-4.2 5.97C9.4 9.82 11.237 8 13.6 8c2.089 0 3.777 1.43 4.13 3.247a1 1 0 0 0 .68.762c1.531.486 2.59 1.847 2.59 3.403C21 17.352 19.342 19 17.2 19H10c-1.7 0-3-1.306-3-2.823 0-1.143.729-2.158 1.822-2.598a1 1 0 0 0 .616-1.07 3.795 3.795 0 0 1-.038-.538Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCloudsOutline)
export default Memo
