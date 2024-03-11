import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBranchFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M5.5 6.792a2.5 2.5 0 1 1 2 0v6.432a.996.996 0 0 1-.103.442c.535.205.98.59 1.265 1.078 3.812.105 5.613-.698 6.551-1.894.979-1.246 1.268-3.19 1.286-6.058a2.5 2.5 0 1 1 2 0c-.015 2.858-.272 5.458-1.712 7.293-1.498 1.908-4.038 2.73-7.901 2.665a2.507 2.507 0 0 1-1.391 1.544c.003.034.005.068.005.103V21.5a1 1 0 1 1-2 0v-3.103c0-.035.002-.07.005-.103a2.5 2.5 0 0 1 .098-4.628.996.996 0 0 1-.103-.442V6.792Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBranchFilled)
export default Memo
