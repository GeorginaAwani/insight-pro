import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconFlowerFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m6.093 3.373.544 2.176c.02.078.03.158.03.239v2.545A5.335 5.335 0 0 0 11 13.573v6.08C9.917 18.259 7.808 17 4 17c1.256 3.926 5.698 5.176 7.879 5.326.04.005.079.007.12.007h.003c.04 0 .08-.002.119-.007 2.181-.15 6.623-1.4 7.879-5.326-3.808 0-5.916 1.259-7 2.653v-6.08a5.335 5.335 0 0 0 4.333-5.24V5.788c0-.08.01-.16.03-.239L17.9 3.4a.209.209 0 0 0-.279-.242C16.71 3.518 14.3 4.374 12 4.333c-2.13-.037-4.706-.873-5.64-1.202a.205.205 0 0 0-.267.242Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconFlowerFilled)
export default Memo
